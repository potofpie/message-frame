def makeCreateKeyPair(time, Crypto, createLogger):
    def createKeyPair():
        logger = createLogger(__name__)
        key = Crypto.PublicKey.RSA.generate(1024)
        time.sleep(1)
        pubKey = key.publickey()
        keyPair = {'private' : key.exportKey('PEM').decode("utf-8"), 'public' : pubKey.exportKey('PEM').decode("utf-8")}
        logger.info(f'keyPair : {keyPair}')
        return keyPair
    return createKeyPair