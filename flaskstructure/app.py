from flask import Flask, request, redirect
from flaskstructure import database
import json
import datetime
import imghdr

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
    filename = str(datetime.datetime.now().year) + '-' + str(datetime.datetime.now().month) + '-' + str(datetime.datetime.now().day) + '-' + str(
        datetime.datetime.now().hour) + '-' + str(datetime.datetime.now().minute) + '-' + str(datetime.datetime.now().second) + '-' + str(datetime.datetime.now().microsecond)
    image.save('/var/www/images' + filename)
    # database.addRisk(filename, data['location'], data['risktype'])


if __name__ == "__main__":
    app.run()
