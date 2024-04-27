import flask
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app = flask.Flask(__name__, template_folder="templates")

@app.route('/pyserver', methods=['GET'])
def pyserver():
    return "Call API success!"
    # return render_template("index.ejs")

if __name__ == "__main__": 
	app.run(port = 5000, debug = True)