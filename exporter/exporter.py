from flask import Flask, request, make_response
from flask_cors import CORS
import json
from handler import document_to_pdf

app = Flask(__name__)
CORS(app)

@app.route("/export", methods=['POST'])

def export():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.content_type = "application/json"

    data = request.get_data()

    json_string = json.loads(data)

    #print(json_string["content"])

    pdf_doc = document_to_pdf(json_string)

    return response;


if __name__ == '__main__':
    app.run(host='localhost', port=5001)