import config
import logging, coloredlogs
import sys
coloredlogs.install()

def createLogger(name):
    formatter = logging.Formatter('%(levelname)s : %(asctime)s : %(name)s : %(message)s')
    
    fileHandler = logging.FileHandler('info.log')
    fileHandler.setFormatter(formatter)

    streamHandler = logging.StreamHandler(sys.stdout)
    streamHandler.setFormatter(formatter)
    
    logger = logging.getLogger(name)
    logger.setLevel(config.LOG_LEVEL)
    logger.addHandler(fileHandler)
    logger.addHandler(streamHandler)
    return logger