import boto3


def convertImageToBytes(imageFileName):
    with open(imageFileName, 'rb') as image_file:
        return image_file.read()


def getLabels(imageFileName):
    client = boto3.client('rekognition')

    response = client.detect_labels(
        Image={
            'Bytes': convertImageToBytes(imageFileName)
        },
        MaxLabels=123
    )

    print(response)
    return response


if __name__ == "__main__":
    getLabels("example.png")
