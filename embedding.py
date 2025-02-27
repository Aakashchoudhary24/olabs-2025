from sentence_transformers import SentenceTransformer
import re  # Preprocessing

# Loading the SBERT model(slightly better for exact sentence embedding coversion)
sbert_model = SentenceTransformer("all-MiniLM-L6-v2")

# Function to generate embeddings
def get_sbert_embedding(texts):
    if isinstance(texts, str):  # Convert a single string to a list
        texts = [texts]
    return sbert_model.encode(texts)  

# Function to preprocess text
def preprocess_text(text):
    text = text.lower()  # Converting to lowercase
    text = re.sub(r'\s+', ' ', text).strip()  # Removes extra spaces
    return text

# Example Queries
queries = [
    "Show me physics experiments for high school students",
    "What are some chemistry experiments for 10th grade?",
    "Biology lab activities related to photosynthesis"
]

# Preprocess and generate embeddings
cleaned_queries = [preprocess_text(q) for q in queries]
query_embeddings = get_sbert_embedding(cleaned_queries)

# Display Results
for i, emb in enumerate(query_embeddings):
    print(f"✅ Query {i+1}: {queries[i]}")
    print(f"   Embedding shape: {emb.shape}")  
