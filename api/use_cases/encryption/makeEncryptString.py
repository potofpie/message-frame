def makeEncryptString(rsa, createLogger):
    def encryptString(publicKey, string):
        logger = createLogger(__name__)
        logger.info(f'string : {string}')
        encryptedString = rsa.encrypt(string.encode('utf-8'), publicKey)
        logger.info(f'encryptedString : {encryptedString}')
        return encryptedString
    return encryptString
    