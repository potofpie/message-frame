
import {FC} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "./EncryptionKeys.css"
import styled from 'styled-components'
export interface Key {
    type: 'public' | "private";
    text: string;
}
interface EncryptionKeyProps {
    keyObject: Key
    selected: boolean
}

const KeyEditor = styled.div.attrs( {
    className: "border-solid border-yellow border-2 "
  })``
const KeyEditorTitle = styled.div.attrs( {
className: "m-0 text-white p-2 text-xs	"
})``


export const EncryptionKey:FC<EncryptionKeyProps> = ({keyObject, selected}) => {
    return (
        <KeyEditor>
            <KeyEditorTitle >{ keyObject.type } Key</KeyEditorTitle>
            <AceEditor
                mode="java"
                theme="monokai"
                name="UNIQUE_ID_OF_DIV"
                height='215px'
                readOnly={true ? false : true} 
                showGutter={false}
                value={"testing"}
                editorProps={{ $blockScrolling: true }}
            />
        </KeyEditor>
    )
}