from use_cases import *
import rsa

import config
import libs
import routes
from flask_cors import CORS

from flask import Flask
app = Flask(__name__)
CORS(app)

logger = createLogger(__name__ + '(app.py)')


@app.route('/')
def home():
    try:
        logger.info({'body' : 'Welcome to the Message Frame API!'})
        return {'body' : 'Welcome to the Message Frame API!'}, 200
    except Exception as error:
        logger.exception(error)
        return {'body': str(error)}, 400


routes.makeRoutes(app,'/api')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)


    