import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from flask import Flask, request, redirect, render_template
from flaskstructure import database 

import json
import datetime
import imghdr

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/findRisk', methods=['GET'])
def findRisk():
    data = json.loads(request.data)
    return json.dumps(database.findRisk(data['location']))


@app.route('/api/getrisks', methods=['GET'])
def getImages():
    return str(database.getRisksBasicInfo())

@app.route('/api/addrisk', methods=['POST'])
def addRisk():
    image = request.files['image']
    filename = str(datetime.datetime.now().year) + '-' + str(datetime.datetime.now().month) + '-' + str(datetime.datetime.now().day) + '-' + str(
        datetime.datetime.now().hour) + '-' + str(datetime.datetime.now().minute) + '-' + str(datetime.datetime.now().second) + '-' + str(datetime.datetime.now().microsecond)
    image.save('/var/www/images/' + filename)
    return redirect('/')
    # database.addRisk(filename, data['location'], data['risktype'])


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
