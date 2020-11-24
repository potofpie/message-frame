from Crypto.PrivateKey import RSA
key = RSA.importKey(open("../resources/keys/sample_key", "rb").read())