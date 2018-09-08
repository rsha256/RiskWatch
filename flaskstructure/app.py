from flask import Flask, request, redirect
from flaskstructure import database
import json
import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to RiskWatch!"

@app.route('/api/getrisks', methods=['GET'])
def getImages():
    return str(database.getRisks())

@app.route('/api/addrisk', methods=['POST'])
def addRisk():
    image = request.files['image']
    filename = str(datetime.datetime.now().year + datetime.datetime.now().month + datetime.datetime.now().day + datetime.datetime.now().hour + datetime.datetime.now().minute + datetime.datetime.now().microsecond )
    image.save(filename)
    return(redirect('http://localhost:3000'))
    # database.addRisk(filename, data['location'], data['risktype'])
    

if __name__ == "__main__":
    app.run()