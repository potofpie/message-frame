def makeDecryptString(rsa, createLogger):
    def decryptString(privateKey, encryptedString):
        logger = createLogger(__name__)
        logger.info(f'encryptedString : {encryptedString}')
        decryptedString = rsa.decrypt(encryptedString, privateKey)
        logger.info(f'decryptedString : {decryptedString}')
        return decryptedString.decode()
    return decryptString
    