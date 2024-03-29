import React,{useState} from 'react'
import { FileUploader } from 'react-drag-drop-files'

const fileTypes=["JPEG","PNG","GIF","JPG"]

export const FileDrop=({setSelFile})=> {
    const [file, setFile] = useState(null);
    
    const handleChange = (file) => {
    setFile(file);
    setSelFile(file)
  };
  return (
    <div className="filedrop-holder">
      <h1>Drag & Drop Avatar</h1>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        maxSize="1"
      />
      <p className='text-danger'>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
    </div>
  );
}