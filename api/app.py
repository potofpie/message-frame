from use_cases import *
import rsa
import libs

def main():
    logger = createLogger(__name__ + '(app.py)')
    message = "Something cool. This might be awesome!" 
    publicKey, privateKey = rsa.newkeys(512)
    encryptedMessage = encryptString(publicKey, message)
    decryptedMessage = decryptString(privateKey, encryptedMessage)

    
main()