from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo

app = Flask (__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/zev_infrastructure_db")

@app.route("/")
def dashboard():

    return render_template('index.html', )



if __name__ == "__main__":
    app.run()
