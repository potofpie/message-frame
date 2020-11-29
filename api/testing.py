#!/usr/bin/env python

from Crypto.PublicKey import RSA
key = RSA.generate(1024)
# print(key.exportKey('PEM'))

pub_key = key.publickey()
# print(pub_key.exportKey('PEM'))

with open('../resources/keys/public', 'w') as filehandle:
    filehandle.write(pub_key.exportKey('PEM').decode("utf-8") )

with open('../resources/keys/private', 'w') as filehandle:
    filehandle.write(key.exportKey('PEM').decode("utf-8") )


pub = '' 
pri = '' 

with open('../resources/keys/public', 'r') as filehandle:
    pub = filehandle.read()


with open('../resources/keys/private', 'r') as filehandle:
    pri = filehandle.read()


# print(str.encode(pub))
pubKey = RSA.importKey(str.encode(pub))
encString = pubKey.encrypt(b'this shit',5000)



priKey = RSA.importKey(str.encode(pri))


print(priKey.decrypt(encString).decode("utf-8"))
