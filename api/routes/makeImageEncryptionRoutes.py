import base64
from io import BytesIO

def makeImageEncryptionRoutes(libs,use_cases,json,flask,app,path):
    @app.route(f'{path}/createKeyPair', methods=['GET'])
    def createKeyPair():
        try:
            logger = libs.createLogger(f'{__name__} (def createKeyPair)')
            keyPair = use_cases.createKeyPair()
            return {'body' :  keyPair}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400

    @app.route(f'{path}/encryptDecryptedString', methods=['POST'])
    def encryptString():
        try:
            logger = libs.createLogger(f'{__name__} (def encryptString)')
            data = flask.request.json
            string, publicKey, privateKey = [data['string'], data['public'], data['private']]

            base64StringEncrypted = use_cases.encryptString(publicKey, string)
            logger.info({'base64StringEncrypted' : str(base64StringEncrypted)})

            decryptedString = use_cases.decryptString(privateKey, base64StringEncrypted)
            logger.info({'decryptedString' : str(decryptedString)})

            return {'body' :  decryptedString}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400
    @app.route(f'{path}/readWriteEncryptDecryptedString', methods=['POST'])
    def readWriteEncryptDecryptedString():
        try:
            logger = libs.createLogger(f'{__name__} (def readWriteEncryptDecryptedString)')
            data = flask.request.form
            files = flask.request.files
            string, publicKey, privateKey = [data['string'], data['public'], data['private']]
            image = files['image']

            base64StringEncrypted = use_cases.encryptString(publicKey, string)
            logger.info({'base64StringEncrypted' : str(base64StringEncrypted)})
            imgWithString = use_cases.writeStringToImage(image, base64StringEncrypted)
            
            
            
            stringFromImage = use_cases.readStringFromImage(imgWithString)
            logger.info({'stringFromImage' : stringFromImage})

            decryptedString = use_cases.decryptString(privateKey, stringFromImage)
            logger.info({'decryptedString' : str(decryptedString)})

            return {'body' :  [imgWithString.height, imgWithString.width]}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400

    @app.route(f'{path}/createMessageImage', methods=['POST'])
    def createMessageImage():
        try:
            logger = libs.createLogger(f'{__name__} (def createMessageImage)')
            data = flask.request.form
            files = flask.request.files
            string, publicKey, privateKey = [data['string'], data['public'], data['private']]
            image, messageImage  = [files['image'],files['messageImage']]

            base64StringEncrypted = use_cases.encryptString(publicKey, string)
            logger.info({'base64StringEncrypted' : str(base64StringEncrypted)})
            imgWithString = use_cases.writeStringToImage(image, base64StringEncrypted)

            img_io = BytesIO()
            imgWithString.save(img_io, 'PNG', quality=70)
            img_io.seek(0)
            
            
            
            # stringFromImage = use_cases.readStringFromImage(imgWithString)
            # logger.info({'stringFromImage' : stringFromImage})

            # decryptedString = use_cases.decryptString(privateKey, stringFromImage)
            # logger.info({'decryptedString' : str(decryptedString)})

            return flask.send_file(img_io, mimetype='image/png')
            # return {'body' :  [imgWithString.height, imgWithString.width]}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400
    @app.route(f'{path}/readMessageImage', methods=['POST'])
    def readMessageImage():
        try:
            logger = libs.createLogger(f'{__name__} (def createMessageImage)')
            data = flask.request.form
            files = flask.request.files
            string, publicKey, privateKey = [data['string'], data['public'], data['private']]
            image, messageImage  = [files['image'],files['messageImage']]

            # base64StringEncrypted = use_cases.encryptString(publicKey, string)
            # logger.info({'base64StringEncrypted' : str(base64StringEncrypted)})
            # imgWithString = use_cases.writeStringToImage(image, base64StringEncrypted)
            
            
            
            stringFromImage = use_cases.readStringFromImage(messageImage)
            logger.info({'stringFromImage' : stringFromImage})

            decryptedString = use_cases.decryptString(privateKey, stringFromImage)
            logger.info({'decryptedString' : str(decryptedString)})

            return {'body' : decryptedString}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400





