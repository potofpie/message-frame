def makeReadStringFromImage(Image, createLogger):
    def readStringFromImage(imageWithString):
        logger = createLogger(__name__)
        messageImage = imageWithString
        # messageImage = Image.open(imageWithString.stream)
        pixels = messageImage.load()

        stringFromImage = '' 
        for characterIndex in range(0,175):
            # characterValue = ord(stringAsList[characterIndex])
            # logger.info({'chr(pixels[characterIndex+50,50][0])' : chr(pixels[characterIndex+50,50][0])})
            stringFromImage = stringFromImage + chr(pixels[characterIndex+50,50][0])
        logger.info({'stringFromImage' : stringFromImage})
        return stringFromImage
    return readStringFromImage
