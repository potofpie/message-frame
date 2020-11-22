def makeDecryptMessage(log, rsa):
    def decryptMessage(privateKey, encryptedString):
        text = rsa.decrypt(encryptedString, privateKey)
        return text.decode()
    return decryptMessage
    