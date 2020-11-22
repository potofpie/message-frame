#encryption use_cases
from encryption import makeDecryptedString
from encryption import makeEncryptString

#imageEdit use_cases



decryptedString = makeDecryptedString()
encryptString = makeEncryptString()

def main():
    message = "Something cool. This might be awesome!" 
    publicKey, privateKey = rsa.newkeys(512)
    encryptedMessage = encryptMessage(publicKey, message)
    print({ 'encryptedMessage' : encryptedMessage})
    decryptedMessage = decryptMessage(privateKey, datafromimage)
    print({ 'decryptedMessage' : decryptedMessage})

main()