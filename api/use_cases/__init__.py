from Crypto.PublicKey import RSA
from PIL import Image
import Crypto
import rsa
from libs import * 

# use_cases.encryption.*
from use_cases.encryption import makeDecryptString, makeEncryptString, makeCreateKeyPair
decryptString = makeDecryptString(Crypto, createLogger)
encryptString = makeEncryptString(Crypto, createLogger)
createKeyPair = makeCreateKeyPair(Crypto, createLogger)

# use_cases.imageEdit.*
from use_cases.imageEdit import makeWriteStringToImage, makeReadStringFromImage
writeStringToImage = makeWriteStringToImage(Image, createLogger)
readStringFromImage = makeReadStringFromImage(Image, createLogger)


