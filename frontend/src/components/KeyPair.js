
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "./KeyPair.css"

function KeyPair(props) {
  return (
        <div className="key-section">
            <div className='key'>
                <p className='small-info'>Public Key</p>
                <AceEditor
                mode="java"
                theme="monokai"
                name="UNIQUE_ID_OF_DIV"
                height='225px'
                value={String(props.keyPair['public'])}
                editorProps={{ $blockScrolling: true }}
                />
            </div>
            <div className='key'>
                <p className='small-info'>Private Key</p>
                <AceEditor
                    mode="java"
                    theme="monokai"
                    name="UNIQUE_ID_OF_DIV"
                    height='225px'
                    value={String(props.keyPair['private'])}
                    editorProps={{ $blockScrolling: true }}
                    />
            </div>
        </div>
  );
}

export default KeyPair;
