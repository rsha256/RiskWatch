import pymongo
import datetime

client = None
db = None
collection = None

def getDatabase():

    client = MongoClient()

    db = client.imageDatabase;

    collection = db.imageCollection;

#returns a array of the images, each one is a dictonary
def getImages():

    imageList = None
    counter = 0


    posts = collection.posts
    for post in posts.find():
        imageList[counter] = post
        counter = counter + 1
    
    print("[DatabaseManager]" + str(counter) + " things returned")

    return imageList
    

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

    collection.update_one({'_id': imageId }, {"flagged": "true" }, upsert=False)

    print("[DatabaseManager] Flagged image ")


def count():
    return collection.posts.count

