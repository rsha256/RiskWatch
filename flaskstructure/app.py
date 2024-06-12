import os
import sys
import random
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from flask import Flask, request, redirect, render_template, json
from flask_cors import CORS

from flaskstructure import database, geocacher

import datetime
import imghdr

app = Flask(__name__)
CORS(app)


@app.route('/api/findRisk', methods=['GET'])
def findRisk():
    data = json.loads(request.data)
    return json.dumps(database.findRisk(data['location']))


@app.route('/api/getrisks', methods=['GET'])
def getImages():
    return json.dumps(database.getRisksBasicInfo())


@app.route('/api/addrisk', methods=['POST'])
def addRisk():
    image = request.files['image']
    hazardtype = request.form.get("hazardtype")
    filename = []
    current_dt = datetime.datetime.now()
    filename.append(current_dt.year)
    filename.append(current_dt.month)
    filename.append(current_dt.day)
    filename.append(current_dt.hour)
    filename.append(current_dt.minute)
    filename.append(current_dt.second)
    filename.append(current_dt.microsecond)
    filename = map(str, filename)
    filename = '-'.join(filename)
    image.save('/var/www/html/images/' + filename)

    DEFAULT_LOCATION_X = 39.9578174
    DEFAULT_LOCATION_Y = -75.195382
    location = str(random.random() / 10 + DEFAULT_LOCATION_X) + "," + \
        str(random.random() / 10 + DEFAULT_LOCATION_Y)

    database.addRisk(filename, location, hazardtype)
    return redirect("http://rskwatch.com")


@app.route('/api/reversecoords', methods=['GET'])
def getReverseCoords():
    print(request.data)
    data = json.loads(request.data)
    lat = data['lat']
    lng = data['lng']
    return geocacher.reverseCoords(lat, lng)


@app.route('/api/flagimage', methods=['POST'])
def flagImage():
    return  # This endpoint overrides the database flagger, for demo purposes


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
