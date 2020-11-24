import json
import use_cases
import flask
import libs 

from routes.makeImageEncryptionRoutes import makeImageEncryptionRoutes

def makeRoutes(app,path):
    makeImageEncryptionRoutes(libs,use_cases,json,flask,app,path+'/imageEncryption')
