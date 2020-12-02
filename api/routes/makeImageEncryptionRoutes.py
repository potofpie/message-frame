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

    @app.route(f'{path}/createMessageImage', methods=['POST'])
    def createMessageImage():
        try:
            logger = libs.createLogger(f'{__name__} (def createMessageImage)')
            data = flask.request.form
            files = flask.request.files

            string, publicKey, privateKey = [data['string'], data['public'], data['private']]
            image = files['image']

            logger.info(f'The public key that will be used: {publicKey}')
            logger.info(f'The private key that will be used: {privateKey}')
            logger.info(f'The string we would like to stored in the image: {string}')
            logger.info(f'The image the message will be added to: {str(image)}')


            base64StringEncrypted = use_cases.encryptString(publicKey, string)
            logger.info({'The string after it has been encodeed with base64: ' : str(base64StringEncrypted)})
            
            imgWithString = use_cases.writeStringToImage(image, base64StringEncrypted)
            img_io = BytesIO()
            imgWithString.save(img_io, 'PNG', quality=70)
            img_io.seek(0)
            return flask.send_file(img_io, mimetype='image/png')
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400
    @app.route(f'{path}/readMessageImage', methods=['POST'])
    def readMessageImage():
        try:
            logger = libs.createLogger(f'{__name__} (def createMessageImage)')
            data = flask.request.form
            files = flask.request.files
            string, publicKey, privateKey = [data['public'], data['private']]
            messageImage  = files['messageImage']

            logger.info(f'The public key that will be used: {publicKey}')
            logger.info(f'The private key that will be used: {privateKey}')
            logger.info(f'The image the message will be added to: {str(messageImage)}')

            
            stringFromImage = use_cases.readStringFromImage(messageImage)
            logger.info({'The encrypted string stored in the image: ' : stringFromImage})

            decryptedString = use_cases.decryptString(privateKey, stringFromImage)
            logger.info({'The string that has been decrypted string: ' : str(decryptedString)})

            return {'body' : decryptedString}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400





