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

    @app.route(f'{path}/encrypt', methods=['POST'])
    def encrypt():
        try:
            logger = libs.createLogger(f'{__name__} (def encrypt)')
            data = flask.request.form
            files = flask.request.files
            
            string, key, keyType = [data['string'], data['key'], data['keyType']]
            image = files['image']

            logger.info(f'The {keyType} key that will be used: {key}')
            logger.info(f'The image the message will be added to: {image}')

            base64StringEncrypted = use_cases.encryptString(key, string)
            logger.info({'The string after it has been encoded with base64: ' : str(base64StringEncrypted)})
            
            imgWithString = use_cases.writeStringToImage(image, base64StringEncrypted)
            img_io = BytesIO()
            imgWithString.save(img_io, 'PNG', quality=70)
            img_io.seek(0)
            data64 = base64.b64encode(img_io.getvalue())
            return u'data:img/jpeg;base64,' + data64.decode('utf-8')
            # return flask.send_file(img_io, mimetype='image/png')
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400
    @app.route(f'{path}/decrypt', methods=['POST'])
    def decrypt():
        try:
            logger = libs.createLogger(f'{__name__} (def decrypt)')
            data = flask.request.form
            files = flask.request.files

            key, keyType = [data['key'], data['keyType']]
            image  = files['image']

            logger.info(f'The {keyType} key that will be used: {key}')
            logger.info(f'The image the message will be added to: {image}')

            
            stringFromImage = use_cases.readStringFromImage(image)
            logger.info({'The encrypted string stored in the image: ' : stringFromImage})

            decryptedString = use_cases.decryptString(key, stringFromImage)
            logger.info({'The string that has been decrypted string: ' : str(decryptedString)})

            return {'body' : decryptedString}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400





