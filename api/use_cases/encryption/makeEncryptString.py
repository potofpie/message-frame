def makeEncryptMessage(log, rsa):
    def encryptMessage(publicKey, string):
        encryptedString = rsa.encrypt(string.encode('utf-8'), publicKey)
        return encryptedString
    return encryptMessage
    