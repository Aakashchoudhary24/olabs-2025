from db_setup import get_db_connection
from embeddings import embed_text
from synonyms import expand_query

def search_experiments(query):
    conn = get_db_connection()
    cur = conn.cursor()
    
    expanded_query = expand_query(query)  
    print(f"Expanded Query: {expanded_query}")

    query_embedding = embed_text(expanded_query)
    cur.execute("""
        SELECT id, title, description, subject, (embedding <=> %s) AS similarity
        FROM experiments
        WHERE embedding <=> %s < 0.8  -- Use cosine similarity
        ORDER BY similarity
        LIMIT 10;
    """, (query_embedding, query_embedding))

    results = cur.fetchall()
    conn.close()

    return [
        {"id": row[0], "title": row[1],"subject": row[3], "similarity": row[4]}
        for row in results
    ]
