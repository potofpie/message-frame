# import rsa
# message = b"This is the message to be encrypted"
# public_key, private_key = rsa.newkeys(1024)
# encrypted_message = rsa.encrypt(message, private_key)
# decrypted_message = rsa.decrypt(encrypted_message, public_key)
# print(encrypted_message, decrypted_message)

from Crypto.PublicKey import RSA
key = RSA.generate(1024)
# print(key.exportKey('PEM'))

pub_key = key.publickey()
# print(pub_key.exportKey('PEM'))

with open('../resources/keys/public', 'w') as filehandle:
    filehandle.write(pub_key.exportKey('PEM').decode("utf-8") )

with open('../resources/keys/private', 'w') as filehandle:
    filehandle.write(key.exportKey('PEM').decode("utf-8") )
print('keys have been written')

pub = '' 
pri = '' 


with open('../resources/keys/public', 'r') as filehandle:
    pub = filehandle.read()

with open('../resources/keys/private', 'r') as filehandle:
    pri = filehandle.read()

print('keys have been read')

# print(str.encode(pub))
pubKey = RSA.importKey(str.encode(pub))
priKey = RSA.importKey(str.encode(pri))

# encString = pubKey.encrypt(b'this shit',5000)
encString = priKey.encrypt(b'this shit',5000)


# print(priKey.decrypt(encString).decode("utf-8"))
print(pubKey.decrypt(encString).decode("utf-8"))
