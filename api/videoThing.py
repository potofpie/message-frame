from PIL import Image,ImageFilter  
import rsa
import base64

# Private key decryption
def encryptMessage(publicKey, string):
    encryptedString = rsa.encrypt(string.encode('utf-8'), publicKey)
    return encryptedString

def decryptMessage(privateKey, encryptedString):
    text = rsa.decrypt(encryptedString, privateKey)
    return text.decode()

def writeArrayToImage(array):
    print(type(array))
    im = Image.open('birdlegs.jpg')
    pixels = im.load()
    print('===== write =====')
    for i in range(0, len(array)):
        print(pixels[i+100, 50])
        pixels[i+100, 50] = (array[i], 0, 0)
    im.save("output.jpg")

def readArrayToImage():
    im = Image.open('birdlegs.jpg')
    pixels = im.load()
    thearray = []
    print('===== read =====')
    for i in range(0, 64):
        print(pixels[i+100, 50]) 
        thearray.append(pixels[i+100, 50][0])
    return thearray


def main():
    message = "Something cool. This might be awesome!" 
    publicKey, privateKey = rsa.newkeys(512)
    # print({ 'message' : message})
    encryptedMessage = encryptMessage(publicKey, message)
    # print({ 'encryptedMessage' : type(encryptedMessage)})
    # print(f'encryptedMessage ({len(encryptedMessage)}): ')
    # for thing in encryptedMessage:
        # print(f'    - {thing}')    
    writeArrayToImage(encryptedMessage)
    datafromimage = readArrayToImage()
    print({ 'encryptedMessage' : [i for i in encryptedMessage]})
    print({ 'datafromimage' : datafromimage })
    # decryptedMessage = decryptMessage(privateKey, datafromimage)
    # print({ 'decryptedMessage' : decryptedMessage})


main()