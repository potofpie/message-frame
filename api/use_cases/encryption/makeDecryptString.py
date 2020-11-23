def makeDecryptString(rsa, createLogger):
    def decryptString(privateKey, encryptedString):
        logger = createLogger(__name__)
        logger.info(f'Encrypted string: {encryptedString}')
        text = rsa.decrypt(encryptedString, privateKey)
        logger.info(f'Decrypted string: {text}')
        return text.decode()
    return decryptString
    