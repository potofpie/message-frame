from use_cases import *
import rsa

import config
import libs
import routes

from flask import Flask
app = Flask(__name__)

logger = createLogger(__name__ + '(app.py)')


@app.route('/')
def home():
    try:
        # main()
        logger.info({'body' : 'Welcome to the Message Frame API!'})
        publicKey, privateKey = rsa.newkeys(512)
        return {'body': str(publicKey)}, 200
    except Exception as error:
        logger.exception(error)
        return {'body': str(error)}, 400


routes.makeRoutes(app,'/api')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)


    