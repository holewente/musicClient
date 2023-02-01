import { useState } from "react";
import { addMusic,delMusic, getCateg } from "./getData";
import { useQuery } from "react-query";


export const Upload=()=> {
  const {data,status}=useQuery('categ',getCateg)
  status=='success' && console.log(data)
  return (
    <div className="loginregisterpanel file-drop-holder">
      <h5>Upload into our library!</h5>
      <select id="" value="categ"></select>
      <input className="feltoltcss text-dark" type="text" placeholder="Paste your song URL!" id="url" />
      <br /><br /><input className="feltoltcss text-dark" type="text" id="title" placeholder="Give a name to your Upload!" />
      <br /><br />
      <input className="bg-primary text-dark center" type="button" value="Upload your song!" />
      
      
    </div>
  );

}