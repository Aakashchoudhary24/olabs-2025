import psycopg2

conn = psycopg2.connect(
    dbname="olabs",
    user="sunil",
    password="newpassword",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

def get_db_connection():
    """Returns a new database connection"""
    return psycopg2.connect(
        dbname="olabs",
        user="sunil",
        password="newpassword",
        host="localhost",
        port="5432"
    )
