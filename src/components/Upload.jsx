import { useState } from "react";
import { addMusic, delMusic, getCateg } from "./getData";
import { useQuery } from "react-query";
import Select from "react-select";


function options(data){
  let arr=[]

  for (let obj of data){
    arr.push({value:obj.id,label:obj.genre})
  }
  return arr
}
function url(data){
  let arr=[]

  for (let obj of data){
    arr.push({value:obj.url})
  }
  return arr
}

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = 'green';
    return {
      ...styles,
      backgroundColor: isDisabled ? 'red' : 'white',
      color: 'black',
      cursor: isDisabled ? 'not-allowed' : 'default',
      
    };
  },
  
};

export const Upload = () => {
  const { data, status } = useQuery("categ", getCateg);
  const [selectedOption, setSelectedOption] = useState(null);
  const [uploadSong, setUploadSong] = useState(null);
  const [title,setTitle] = useState("");
  const [url,setUrl] = useState("");
  status == "success" && console.log(data.data);
  
  console.log("selectedOption",selectedOption)
  console.log(title,"k")
  console.log(url,"url")
  const handleUpload=()=>{
    const formData=new FormData()
    formData.append("url",url)
    formData.append("title",title)
    formData.append("categ_id",selectedOption.value)
    addMusic(formData)
  }
  return (
    <div className="loginregisterpanel file-drop-holder">
      <h5 className="mt-5 mb-4">Upload into our library!</h5>
      <Select
        options={status=="success" && options(data.data)}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        className="text-dark mb-4"
        styles={colourStyles}
      />
      <input
        className="feltoltcss"
        type="text"
        value={url}
        onChange={(event)=>setUrl(event.target.value)}
        placeholder="Paste your song URL!"
        id="url"
      />
      <br />
      <br />
      <input
        className="feltoltcss"
        type="text"
        id="title"
        onChange={(event)=>setTitle(event.target.value)}
        value={title}
        placeholder="Give a name to your Upload!"
      />
      <br />
      <br />
      <input
        className="btn btn-primary bg-primary text-dark align-items-center"
        type="button"
        onClick={handleUpload}
        value="Upload your song!"
      />
    </div>
  );
};
