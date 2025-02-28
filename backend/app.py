from flask import Flask, request, jsonify
from flask_cors import CORS
from search import search_experiments

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q')  # Get search query from frontend
    if not query:
        return jsonify({"error": "Query parameter 'q' is required"}), 400

    results = search_experiments(query)
    return jsonify({"results": results})

if __name__ == "__main__":
    app.run(debug=True)
