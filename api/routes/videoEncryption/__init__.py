from makeImageEncryptionRoutes import makeImageEncryptionRoutes
from makeVideoEncryptionRoutes import makeVideoEncryptionRoutes

def makeRoutes(app):
    makeVideoEncryptionRoutes(app, 'videoEncryption/')
    makeImageEncryptionRoutes(app, 'imageEncryption/')