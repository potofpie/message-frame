
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "./KeyPair.css"

function KeyPair(props) {
  return (
        <div className="KeyPair-container">
            <div className='KeyPair-object-container '>
                <div className='KeyPair-key'>
                    <p className='KeyPair-small-info'>Public Key</p>
                    <AceEditor
                    mode="java"
                    theme="monokai"
                    name="UNIQUE_ID_OF_DIV"
                    showGutter={false} 
                    height='190px'
                    width ='395px'
                    value={String(props.keyPair['public'])}
                    editorProps={{ $blockScrolling: true }}
                    />
                </div>
                <div className='KeyPair-key'>
                    <p className='KeyPair-small-info'>Private Key</p>
                    <AceEditor
                        mode="java"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        height='190px'
                        width ='395px'
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
