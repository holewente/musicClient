import { useState } from "react";
import { addMusic, delMusic, getCateg } from "./getData";
import { useQuery } from "react-query";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Upload = () => {
  const { data, status } = useQuery("categ", getCateg);
  const [selectedOption, setSelectedOption] = useState(null);
  status == "success" && console.log(data);
  return (
    <div className="loginregisterpanel file-drop-holder">
      <h5>Upload into our library!</h5>
      <Select
        options={options}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        id=""
        className="text-primary"
        value="categ"
      />
      <input
        className="feltoltcss text-dark"
        type="text"
        placeholder="Paste your song URL!"
        id="url"
      />
      <br />
      <br />
      <input
        className="feltoltcss text-dark"
        type="text"
        id="title"
        placeholder="Give a name to your Upload!"
      />
      <br />
      <br />
      <input
        className="bg-primary text-dark center"
        type="button"
        value="Upload your song!"
      />
    </div>
  );
};
