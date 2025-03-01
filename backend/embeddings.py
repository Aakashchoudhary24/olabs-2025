import tensorflow_hub as hub
import numpy as np
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1" 

embed_model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

def embed_text(text):
    vec = embed_model([text])[0].numpy()
    norm_vec = vec / np.linalg.norm(vec)
    return "[" + ",".join(map(str, norm_vec.tolist())) + "]"
