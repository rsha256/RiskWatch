from flask import Flask, request
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
    data = request.data

    database.addRisk('/var/www/images' + str(datetime.time.microsecond), data['location'], data['risktype'])
    

if __name__ == "__main__":
    app.run()