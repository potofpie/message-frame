
import {FC} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "./KeyPair.css"


const regularWidth = 435;

function determineWidth(screenWidth: number){
    let ratioCodeWindow = Math.round(screenWidth*.9) 
    if(ratioCodeWindow < regularWidth){
        return ratioCodeWindow
    }
    else{
        return regularWidth
    }
}

interface KeyPairProps {
    keyType: 'public' | "private";
    keyPair: any;
    screenWidth: number 
}


export const  KeyPair:FC<KeyPairProps> = ({keyType, screenWidth, keyPair})  => {
  return (
        <div className="KeyPair-container">
            <div className='KeyPair-object-container '>
                <div className={ keyType === 'public' ? 'KeyPair-key-highlighted' : 'KeyPair-key'}>
                    <p className='KeyPair-small-info'>Public Key</p>
                    <AceEditor
                        mode="java"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        showGutter={false} 
                        height='215px'
                        onChange={(e) => {
                            let tmpKeyPair = keyPair
                            tmpKeyPair.public = e
                            // setKeyPair(tmpKeyPair)
                        }}
                        readOnly={keyType === 'public' ? false : true}
                        // style={keyType === 'public' ? null : {color : '#595959'}}
                        // width={screenWidth < 1000 ? determineWidth(screenWidth) : regularWidth} 
                        value={String(keyPair['public'])}
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
                <div className={ keyType === 'private' ? 'KeyPair-key-highlighted' : 'KeyPair-key'}>
                    <p className='KeyPair-small-info'>Private Key</p>
                    <AceEditor
                        mode="java"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        height='215px'
                        onChange={(e) => {
                            let tmpKeyPair = keyPair
                            tmpKeyPair.private = e
                            // setKeyPair(tmpKeyPair)
                        }}
                        readOnly={keyType === 'private' ? false : true}
                        // style={keyType === 'private' ? null : {color : '#595959'}}
                        // width={screenWidth < 1000 ? determineWidth(screenWidth) : regularWidth} 
                        showGutter={false}
                        value={String(keyPair['private'])}
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
            </div>
        </div>
  );
}

