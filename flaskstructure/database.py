from pymongo import MongoClient
import datetime

client = MongoClient("184.73.76.65", 27017);

db = client.imageDatabase

collection = db.imageCollection

#returns a array of the images, each one is a dictonary
def getImages():

    counter = 0
    returnValue = None

    for post in collection.posts.find():
        returnValue[counter] = post
        counter = counter + 1

    return returnValue

# find the image location format


def addImage(imageFileName, location, riskType):

    if collection == None:
        print("[DatabaseManager] Database was not set up right yet")
        print("[DatabaseManager] Fix this ^ Rahual")
        return

    dataUploaded = datetime.date

    post = {
        "imageFileName": str(imageFileName),
        "location": str(location),
        "riskType" : str(riskType),
        "flagged": "false"
    }

    posts = collection.posts
    post_id = posts.insert_one(post).inserted_id

    print("[DatabaseManager] Thing added")


def flagImage(imageId):

    posts = collection.poss
    image = posts.find_one({"_id" : imageId})

    if image == None:
        print("[DatebaseManager] Image was not found")
        return

    collection.update_one({'_id': imageId}, {"flagged": "true"}, upsert=False)

    print("[DatabaseManager] Flagged image ")


def count():
    return collection.posts.count

#getImages()

#print("End")