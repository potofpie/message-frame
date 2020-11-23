from use_cases import *
import rsa

import config
import libs

from flask import Flask
app = Flask(__name__)


def main():
    logger = createLogger(__name__ + '(app.py)')
    message = "Something cool. This might be awesome!" 
    publicKey, privateKey = rsa.newkeys(512)
    encryptedMessage = encryptString(publicKey, message)
    decryptedMessage = decryptString(privateKey, encryptedMessage)

@app.route('/')
def home():
    try:
        main()
        return 'Welcome to the Message Frame API!', 200
    except Exception as error:
        return {'error' : str(error), 'status' : 400}


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)


    