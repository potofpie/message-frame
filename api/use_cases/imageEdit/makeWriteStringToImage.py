def makeWriteStringToImage(Image, createLogger):
    def writeStringToImage(rawImage, string):
        logger = createLogger(__name__)
        rawImageObject = Image.open(rawImage.stream)
        logger.info({'string being added to image: ' : str(string)})
        stringAsList = list(string)
        pixels = rawImageObject.load()

        logger.info({'len(stringAsList)' : str(len(stringAsList))})
        for characterIndex in range(0,len(stringAsList)):
            characterValue = ord(stringAsList[characterIndex])
            pixels[characterIndex+50,50] = (characterValue,0,0)
        


        rawImageObject.save("pixel_grid.png")
        return rawImageObject
    return writeStringToImage
