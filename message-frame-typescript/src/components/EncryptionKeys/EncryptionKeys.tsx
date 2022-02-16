
import {FC} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import styled from 'styled-components'
export interface Key {
    type: 'public' | "private";
    text: string;
}
interface EncryptionKeyProps {
    keyObject: Key
    selected: boolean
    onChange: any
}



export const EncryptionKey:FC<EncryptionKeyProps> = ({keyObject, selected, onChange}) => {
    const KeyEditor = styled.div.attrs( {
        className: `m-4 border-solid border-yellow ${ selected ? 'border-2' : 'border-4'  } `
      })``
    const KeyEditorTitle = styled.div.attrs( {
        className: "m-0 text-white p-2 text-xs	text-center"
    })``
    return (
        <KeyEditor>
            <KeyEditorTitle >{ keyObject.type } key</KeyEditorTitle>
            <AceEditor
                mode="java"
                theme="monokai"
                name="UNIQUE_ID_OF_DIV"
                height='215px'
                onChange={onChange}
                readOnly={selected ? false : true} 
                showGutter={false}
                value={keyObject?.text.trim()}
                editorProps={{ $blockScrolling: true }}
            />
        </KeyEditor>
    )
}