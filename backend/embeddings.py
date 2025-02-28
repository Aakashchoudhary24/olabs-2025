import tensorflow_hub as hub
import psycopg2
import numpy as np
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1" 


# Load Universal Sentence Encoder model
embed_model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

# Function to get vector embeddings
def embed_text(text):
    vec = embed_model([text])[0].numpy()
    norm_vec = vec / np.linalg.norm(vec)  # Normalize to unit length
    return "[" + ",".join(map(str, norm_vec.tolist())) + "]"
