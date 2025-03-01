from flask import Flask, request, jsonify
from flask_cors import CORS
from search import search_experiments

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get("query")

    if not query:
        return jsonify({"error": "Query parameter 'query' is required"}), 400

    results = search_experiments(query)
    return jsonify({"results": results})


if __name__ == "__main__":
    app.run(debug=True)
