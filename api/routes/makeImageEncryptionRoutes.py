import base64
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




