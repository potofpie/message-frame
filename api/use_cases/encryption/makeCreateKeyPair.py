def makeCreateKeyPair(Crypto, createLogger):
    def createKeyPair():
        logger = createLogger(__name__)
        key = Crypto.PublicKey.RSA.generate(1024)
        pubKey = key.publickey()
        keyPair = {'private' : key.exportKey('PEM').decode("utf-8"), 'public' : pubKey.exportKey('PEM').decode("utf-8")}
        logger.info(f'keyPair : {keyPair}')
        return keyPair
    return createKeyPair