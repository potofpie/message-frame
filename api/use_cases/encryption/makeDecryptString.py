def makeDecryptString(rsa, Crypto, createLogger):
    def decryptString(privateKey, encryptedString):
        logger = createLogger(__name__)
        # logger.info(f'encryptedString : {encryptedString}')
        key = Crypto.importKey(privateKey)
        decryptedString = rsa.decrypt(encryptedString, key)
        # logger.info(f'decryptedString : {decryptedString}')
        return decryptedString.decode()
    return decryptString
    