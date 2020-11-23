def makeEncryptString(rsa, createLogger):
    def encryptString(publicKey, string):
        logger = createLogger(__name__)
        logger.info(f'>>>> Enter: {__name__}')
        logger.info(f'String to be encrypted: {string}')
        encryptedString = rsa.encrypt(string.encode('utf-8'), publicKey)
        logger.info(f'Encrypted string: {string}')
        logger.info(f'<<<< Exit: {__name__}')
        return encryptedString
    return encryptString
    