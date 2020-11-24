import base64
def makeImageEncryptionRoutes(libs,use_cases,json,flask,app,path):
    @app.route(f'{path}/encryptString', methods=['POST'])
    def encryptString():
        try:
            logger = libs.createLogger(f'{__name__} (def encryptString)')
            data = flask.request.json
            string, publicKey, privateKey = [data['string'], data['publicKey'], data['privateKey']]

            # logger.info({'reconstructedPrivateKey' : str(reconstructedPrivateKey)})

            encryptedString = use_cases.encryptString(publicKey, string)
            logger.info({'encryptedString' : str(encryptedString)})

            # base64EncryptedString = str(encryptedString)
            # logger.info({'base64EncryptedString' : base64EncryptedString})

            # decodedencryptedString = bytes(base64EncryptedString,encoding='utf8')
            # logger.info({'decodedEncryptedString' : str(decodedencryptedString)})

            reconstructedPrivateKey =  privateKey.replace(' //','\n')
            decryptedString = use_cases.decryptString(reconstructedPrivateKey, encryptedString)
            logger.info({'decryptedString' : str(decryptedString)})

            return {'body' :  encryptedString}, 200
        except Exception as error:
            logger.exception(error)
            return {'body': str(error)}, 400



