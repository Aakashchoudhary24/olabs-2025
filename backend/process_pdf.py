import fitz  # PyMuPDF
import os
import psycopg2
import numpy as np
import tensorflow_hub as hub
os.environ["CUDA_VISIBLE_DEVICES"] = "-1" 


# Load Universal Sentence Encoder model
embed_model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

DB_PARAMS = {
    "dbname": "olabs",
    "user": "sunil",
    "password": "newpassword",
    "host": "localhost",
    "port": "5432"
}

# Subject keywords
SUBJECT_KEYWORDS = {
    "Physics": ["gravity", "motion", "magnet", "electric", "wave", "force", "energy"],
    "Chemistry": ["reaction", "acid", "base", "compound", "molecule", "pH", "chemical"],
    "Maths": ["algebra", "geometry", "calculus", "probability", "matrix", "trigonometry"]
}

SUBJECT_REFERENCE_SENTENCES = {
    "Physics": "Physics experiments involve the study of forces, motion, energy, electricity, and waves.",
    "Chemistry": "Chemistry experiments include chemical reactions, acids and bases, molecular structures, and elements.",
    "Maths": "Mathematics experiments cover algebra, calculus, geometry, probability, and equations."
}

def extract_text_from_pdf(pdf_path):
    """Extracts the PDF filename as the title and generates a description from the text content."""
    doc = fitz.open(pdf_path)

    title = os.path.splitext(os.path.basename(pdf_path))[0]
    description = ""

    text_blocks = []
    for page in doc:
        blocks = page.get_text("dict")["blocks"]
        for block in blocks:
            if "lines" in block:
                for line in block["lines"]:
                    for span in line["spans"]:
                        text_blocks.append((span["text"], span["size"], span["flags"]))

    text_blocks.sort(key=lambda x: (-x[1], -x[2]))  

    all_text = " ".join([t[0] for t in text_blocks])
    description = ". ".join(all_text.split(". ")[:3]) 

    return title.strip(), description.strip()

def embed_text(text):
    """Generate embeddings for text"""
    vec = embed_model([text])[0].numpy()
    return "[" + ",".join(map(str, vec.tolist())) + "]"

def determine_subject(title, description):
    """Determines the subject of an experiment"""
    text = (title + " " + description).lower()

    for subject, keywords in SUBJECT_KEYWORDS.items():
        if any(keyword in text for keyword in keywords):
            return subject

    exp_embedding = embed_model([text])[0].numpy()
    similarities = {
        subject: np.dot(exp_embedding, embed_model([desc])[0].numpy())
        for subject, desc in SUBJECT_REFERENCE_SENTENCES.items()
    }
    
    return max(similarities, key=similarities.get)  

def insert_into_db(title, description, subject, embedding):
    """Insert extracted data into PostgreSQL database"""
    conn = psycopg2.connect(**DB_PARAMS)
    cur = conn.cursor()

    title = title.replace("\x00", "")
    description = description.replace("\x00", "")
    subject = subject.replace("\x00", "")

    cur.execute("""
        INSERT INTO experiments (title, description, subject, embedding)
        VALUES (%s, %s, %s, %s)
        ON CONFLICT (title) DO NOTHING;
    """, (title, description, subject, embedding))

    conn.commit()
    cur.close()
    conn.close()

def process_pdfs(folder_path):
    """Processes all PDFs in a given folder"""
    for file in os.listdir(folder_path):
        if file.endswith(".pdf"):
            pdf_path = os.path.join(folder_path, file)
            title, description = extract_text_from_pdf(pdf_path)
            subject = determine_subject(title, description)
            embedding = embed_text(title + " " + description)
            insert_into_db(title, description, subject, embedding)
            print(f"✅ Processed: {file} → Title: {title} | Subject: {subject}")

process_pdfs("../experiments") 
