from db_setup import get_db_connection
from embeddings import embed_text

def search_experiments(query):
    """Finds relevant experiments using a hybrid search approach (Vector + Keyword Matching)."""
    conn = get_db_connection()
    cur = conn.cursor()
    
    query_embedding = embed_text(query)  # Convert query to vector

    # Hybrid search: Vector similarity + Full-text search + Subject prioritization
    cur.execute("""
        SELECT id, title, description, subject, (embedding <-> %s) AS similarity
        FROM experiments
        WHERE to_tsvector('english', title || ' ' || description) @@ plainto_tsquery(%s)
        OR embedding <-> %s < 0.8  -- Adjust threshold for relevance
        ORDER BY 
            CASE WHEN to_tsvector('english', title || ' ' || description) @@ plainto_tsquery(%s) THEN 0 ELSE 1 END,  
            similarity  -- Rank by similarity after keyword match
        LIMIT 10;
    """, (query_embedding, query, query_embedding, query))

    results = cur.fetchall()
    conn.close()

    return [
        {"id": row[0], "title": row[1], "description": row[2], "subject": row[3], "similarity": row[4]}
        for row in results
    ]
