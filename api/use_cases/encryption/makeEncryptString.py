def makeEncryptString(rsa, Crypto, createLogger):
    def encryptString(publicKey, string):
        logger = createLogger(__name__)
        # logger.info(f'string : {string}')
        key = Crypto.importKey(publicKey)
        encryptedString = rsa.encrypt(string.encode('utf-8'), key)
        # logger.info(f'encryptedString : {encryptedString}')
        return encryptedString
    return encryptString
    