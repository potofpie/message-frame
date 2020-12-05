
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "./KeyPair.css"


const regularWidth = 435;

function determineWidth(screenWidth){
    let ratioCodeWindow = Math.round(screenWidth*.9) 
    if(ratioCodeWindow < regularWidth){
        return ratioCodeWindow
    }
    else{
        return regularWidth
    }
}


function KeyPair(props) {
  return (
        <div className="KeyPair-container">
            <div className='KeyPair-object-container '>
                <div className={ props.keyType === 'public' ? 'KeyPair-key-highlighted' : 'KeyPair-key'}>
                    <p className='KeyPair-small-info'>Public Key</p>
                    <AceEditor
                        mode="java"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        showGutter={false} 
                        height='235px'
                        readOnly={props.keyType === 'public' ? false : true}
                        style={props.keyType === 'public' ? null : {color : '#595959'}}
                        width={props.screenWidth < 1000 ? determineWidth(props.screenWidth) : regularWidth} 
                        value={String(props.keyPair['public'])}
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
                <div className={ props.keyType === 'private' ? 'KeyPair-key-highlighted' : 'KeyPair-key'}>
                    <p className='KeyPair-small-info'>Private Key</p>
                    <AceEditor
                        mode="java"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        height='235px'
                        readOnly={props.keyType === 'private' ? false : true}
                        style={props.keyType === 'private' ? null : {color : '#595959'}}
                        width={props.screenWidth < 1000 ? determineWidth(props.screenWidth) : regularWidth} 
                        showGutter={false}
                        value={String(props.keyPair['private'])}
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
            </div>
        </div>
  );
}

export default KeyPair;
