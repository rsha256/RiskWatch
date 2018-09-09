
from pymongo import MongoClient
import datetime
import random

listOfRandomRisks = {"homicide", "fire", "car accident", "flooding", "bombing", "war"}

client = MongoClient("184.73.76.65", 27017)

db = client.imageDatabase

collection = db.imageCollection

def addRisk(imageFileName, location, riskType, userPosted, userId):
    if collection == None:
        print("[DatabaseManager] Database was not set up right yet")
        print("[DatabaseManager] Fix this ^ Rahual")
        return

    dateUploaded = datetime.datetime.now().date()

    if userPosted == None:
        userId = "None"

    tags = "" #

    post = {
        "imageFileName": str(imageFileName),
        "location": str(location),
        "flagged": str("false"),
        "timeUploaded" : str(dateUploaded),
        "riskType" : str(riskType),
        "userPosted" : str(userPosted),
        "userName" : str(userId),
        "tags" : str(tags)
    }

    posts = collection.posts
    post_id = posts.insert_one(post).inserted_id
    #Is ununsued as have no use, but want to store the id

    #print("[DatabaseManager] Thing added")

def generateFileName():
    filename = str(datetime.datetime.now().year) + '-' + str(datetime.datetime.now().month) + '-' + str(datetime.datetime.now().day) + '-' + str(
        datetime.datetime.now().hour) + '-' + str(datetime.datetime.now().minute) + '-' + str(datetime.datetime.now().second) + '-' + str(datetime.datetime.now().microsecond)
    return filename

def generateRandomPosts(number):

    for i in range(0, number):
        addRisk("example.png", str(random.random() * 360 - 180) + "," + str(random.random() * 180 - 90) , "homicide", "None", "No")
        print(str(i) + " Posts created")



#generateRandomPosts(100);

collection.delete_many({})
print(str(collection.count()) + " posts in the database")
