import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF","JPG"];

export const Upload=({setSelFile})=> {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    setSelFile(file);
  };
  return (
    <div className="loginregisterpanel file-drop-holder">
      <h5>Upload into our library!</h5>
      <input className="feltoltcss" type="text" placeholder="Paste your song URL!" id="url" />
      <br /><br /><input className="feltoltcss" type="text" id="title" placeholder="Give a name to your Upload!" />
      
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        maxSize="1"
      />
      <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
    </div>
  );
}
