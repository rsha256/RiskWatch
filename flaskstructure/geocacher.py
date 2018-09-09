import requests

def getCords(address):

    payload = {"address" : address, "key" : "AIzaSyBaPrjle3PHIeszmO4Bn7XlYHgrF1pTDzw"}

    r = requests.get("https://maps.googleapis.com/maps/api/geocode/json", params = payload)
    return (r.json()["results"][0]["geometry"]["location"])

def reverseCords(lat,long):

    payload = {"latlng" : (str(lat) + "," + str(long)), "key" : "AIzaSyBaPrjle3PHIeszmO4Bn7XlYHgrF1pTDzw"}

    r = requests.get("https://maps.googleapis.com/maps/api/geocode/json", params = payload)

    print(r.json()["results"][0]["formatted_address"])



reverseCords("40.714224","-73.961452")