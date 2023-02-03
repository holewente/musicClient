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

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'black' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = 'green';
    return {
      ...styles,
      backgroundColor: isDisabled ? 'red' : 'black',
      color: 'white',
      cursor: isDisabled ? 'not-allowed' : 'default',
      
    };
  },
  
};

export const Upload = () => {
  const { data, status } = useQuery("categ", getCateg);
  const [selectedOption, setSelectedOption] = useState(null);
  status == "success" && console.log(data.data);
  
  return (
    <div className="loginregisterpanel file-drop-holder">
      <h5>Upload into our library!</h5>
      <Select
        options={status=="success" && options(data.data)}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        className="text-dark mb-4"
        value="categ"
        styles={colourStyles}
      />
      <input
        className="feltoltcss"
        type="text"
        placeholder="Paste your song URL!"
        id="url"
      />
      <br />
      <br />
      <input
        className="feltoltcss"
        type="text"
        id="title"
        placeholder="Give a name to your Upload!"
      />
      <br />
      <br />
      <input
        className="btn btn-primary bg-primary text-dark align-items-center"
        type="button"
        value="Upload your song!"
      />
    </div>
  );
};
