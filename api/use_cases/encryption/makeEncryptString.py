import base64
def makeEncryptString(Crypto, createLogger):
    def encryptString(publicKey, string):
        logger = createLogger(__name__)
        pubKey = Crypto.PublicKey.RSA.importKey(str.encode(publicKey))
        encryptedString = pubKey.encrypt(string.encode('utf-8'),5000)
        base64StringEncrypted = base64.encodebytes(encryptedString[0]).decode()
        # logger.info(f'encryptedString as text with base64 encoding : {base64StringEncrypted}')
        return base64StringEncrypted
    return encryptString
