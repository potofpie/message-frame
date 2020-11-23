from use_cases import *
import rsa
import libs

def main():
    logger = createLogger(__name__ + '(app.py)')
    message = "Something cool. This might be awesome!" 
    publicKey, privateKey = rsa.newkeys(512)
    encryptedMessage = encryptString(publicKey, message)
    decryptedMessage = decryptString(privateKey, encryptedMessage)
    logger.error('fuck')
    logger.debug('fuck')
    logging.warning('fuck')
    logging.critical('fuck')
main()