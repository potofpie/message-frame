import base64
def makeDecryptString(Crypto, createLogger):
    def decryptString(privateKey, base64StringEncrypted):
        logger = createLogger(__name__)
        priKey = Crypto.PublicKey.RSA.importKey(str.encode(privateKey))
        
        encryptedBytes =  base64.decodebytes(base64StringEncrypted.encode('utf-8'))
        decryptedString = priKey.decrypt(encryptedBytes)
        
        
        # key = Crypto.importKey(privateKey)
        # decryptedString = rsa.decrypt(encryptedString, key)
        # logger.info(f'decryptedString : {decryptedString}')
        return decryptedString.decode()
    return decryptString
    