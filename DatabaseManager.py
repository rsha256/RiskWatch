import pymango
import datatime

client = None
db = None
collection = None

def getDatabase():

    client = MongoClient()

    db = client.imageDatabase;

    collection = db.imageCollection;

def getImages():

#find the image location format

def addImage(imageFileName, location):

    if(collection == None):
        print("[DatabaseManager] Database was not set up right yet")
        print("[DatabaseManager] Fix this ^ Rahual")
        return

    dataUploaded = datatime.date

    post = {
        "imageFileName" : str(imageFileName),
        "location" : str(location),
        "flagged" : "false"
    }

    posts = collection.posts
    post_id = posts.insert_one(post).inserted_id

    print("[DatabaseManager] Thing added")


def flagImage(imageId):

    posts = collection.posts
    image = posts.find_one("_id" : imageId)

    if(image == None):
        print("[DatebaseManager] Image was not found")
        return

    image["flagged"] = "true"

    print("[DatabaseManager] Flagged image ")


def count():
    return collection.posts.count

