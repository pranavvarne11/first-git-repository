from flask import Flask, request, jsonify
from flask_cors import CORS
from models import insert_user, create_table

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    insert_user(name, email)
    return jsonify({"message": "User added successfully!"}), 200

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
