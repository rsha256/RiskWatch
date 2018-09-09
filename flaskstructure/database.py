from pymongo import MongoClient
import datetime
from flaskstructure import object_recognition

client = MongoClient("184.73.76.65", 27017)

db = client.imageDatabase

collection = db.imageCollection

# returns a array of the images, each one is a dictonary, is NOT safe for client side


def getRisks():

    counter = 0
    returnValue = []

    for post in collection.posts.find():
        returnValue.append(post)
        counter += 1

    return returnValue

# returns an array of the posts, each one is a dictonay, however only the nessary client info is included, IS safe


def getRisksBasicInfo():

    returnValue = []
    for post in collection.posts.find():
        value = {
            "riskType": post["riskType"],
            "location": post["location"],
            "id": str(post["_id"]),
            "imageFileName": post["imageFileName"]
        }
        returnValue.append(value)

    return returnValue

# adds a post to the database


def addRisk(imageFileName, location, riskType):

    dateUploaded = datetime.datetime.now().date()

    tags = object_recognition.getLabels('/var/www/html/images/' + imageFileName)

    post = {
        "imageFileName": str(imageFileName),
        "location": str(location),
        "flagged": str("false"),
        "timeUploaded": str(dateUploaded),
        "riskType": str(riskType),
        "tags": str(tags)
    }

    posts = collection.posts
    post_id = posts.insert_one(post).inserted_id
    # Is ununsued as have no use, but want to store the id

    print("[DatabaseManager] Thing added")

# find the data about a certain image, is safe for clientside


def findRisk(location):
    posts = collection.posts
    post = posts.find_one({"location": location})

    if post == None:
        print("[DataBaseManager] No post found with location " + location)

    data = {
        "imageFileName": str(post["imageFileName"]),
        "location": str(location),
        "riskType": str(post["risktype"]),
        "flagged": str(post["flagged"]),
        "tags": str(post["tags"]),
        "timeUploaded": str(post["timeUploaded"]),
        "_id": post["_id"]
    }

    return data

# finds ALL data about a certain image, is NOT safe for clientside


def findAllData(location):

    posts = collection.posts
    post = posts.find_one({
        "location": location
    })

    if post == None:
        print("[DataBaseManager] No post found with location " + location)

    return post

# find and flag a file


def flagRisk(imageFileName):

    posts = collection.posts
    image = posts.find_one({"imageFileName": imageFileName})

    if image == None:
        print("[DatebaseManager] Image was not found")
        return

    collection.update_one({"imageFileName": imageFileName}, {
                          "flagged": "true"}, upsert=False)

    print("[DatabaseManager] Flagged image ")


def count():
    return collection.posts.count
