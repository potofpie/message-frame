import {FC} from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export const FileUploader:FC = () => {
    // specify upload params and url for your files
    // const getUploadParams = ({ meta }: any) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }: any, status: any) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files: any) => { console.log(files.map( (f: any )=> f.meta)) }
   
    return (
      <Dropzone
          classNames={{
            inputLabel: 'text-yellow',
            dropzone: "w-1/2 border-dashed border-yellow border-2	p-2 bg-green h-64 flex justify-center items-center text-center flex-col	" ,
            submitButton : "border-dashed border-yellow border-2 text-yellow p-2 hover:bg-yellow hover:text-green bg-green",
            previewImage: "w-10",
            // preview: "w-5"
          } }
        maxFiles={1}
        // getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        inputContent="Select the image you would like to hiden your message in!"
  
        accept="image/*"
      />
    )
  }