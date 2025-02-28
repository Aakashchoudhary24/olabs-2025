import tensorflow_hub as hub
import psycopg2
import numpy as np

# Load Universal Sentence Encoder model
embed_model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

# Function to get vector embeddings
def embed_text(text):
    # Converts text into a 512-dimensional vector formatted for PostgreSQL
    return "[" + ",".join(map(str, embed_model([text])[0].numpy().tolist())) + "]"  
