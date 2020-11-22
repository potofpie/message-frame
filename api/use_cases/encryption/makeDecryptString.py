def makeDecryptString(rsa, createLogger):
    def decryptString(privateKey, encryptedString):
        logger = createLogger(__name__)
        logger.info(f'>>>> {__name__}')
        logger.info(f'Encrypted string: {encryptedString}')
        text = rsa.decrypt(encryptedString, privateKey)
        logger.info(f'Decrypt string: {text}')
        logger.info(f'<<<< {__name__}')
        return text.decode()
    return decryptString
    