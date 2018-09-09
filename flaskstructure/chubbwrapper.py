import requests
import json


#classes == buisness types, this will return a dictonary of the buisness names and class ids
def getClassesWithKeyword(keyword):

    payload = {"keyword" : keyword}
    r = requests.get("http://chubbhackathon.azurewebsites.net/api/classification", params = payload)

    d = {}

    for i in r.json():
        d[i["name"]] = i["classid"]

    return d;


def getProducts(stateCode, classid):

    payload = {"classid" : classid,"stateid" : stateCode}

    r = requests.get("http://csb30.azurewebsites.net/api/product", params=payload)

    d = {}

    for i in r.json()[1]["product_packages"]:
        print(i["package_name"])

    for i in r.json():
        d[i["product_id"]] = []
        for j in i["product_packages"]:
            m = [j["package_name"]]
            d[i["product_id"]] = d[i["product_id"]].append(m)

    print(d)

    return


#get http://chubbhackathon.azurewebsites.net/api/questions?classes={CLASSID}&products={PRODUCTID}


def getQuestions(classId, products):

    return

#getClassesWithKeyword("")
getProducts("NJ", "2")