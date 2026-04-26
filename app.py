from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai

app = Flask(__name__)
CORS(app)  # Allow requests from React

client = genai.Client(api_key="*******Replace your Google API Key****")

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    prompt = data.get("prompt", "")
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    return jsonify({"response": response.text})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
