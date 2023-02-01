import axios from 'axios';
let url="http://localhost:5000/"

export const checkUsername=async (formdata)=>{
    const response = await axios.post(url+'auth/checkUsername', formdata)
    return await response
    
}

export const login=async (formdata)=>{
    console.log(formdata)
    const response = await axios.post(url+'auth/login', formdata)
    return await response
    
}

export const checkEmail=async (formdata)=>{
    const response = await axios.post(url+'auth/checkEmail', formdata)
    return await response
    
}

export const register=async (formdata)=>{
    const response = await axios.post(url+'auth/register', formdata)
    return await response
    
}

export const updateAvatar=async (formdata)=>{
    const response = await axios.post(url+'auth/updateAvatar', formdata,
    {header:
        {"Content-Type": "multipart/form-data"}
    }
    )
    return await response
    
}

export const deleteUser=async (formdata)=>{
    const response = await axios.post(url+'auth/deleteUser', formdata)
    return await response
}

export const changePassword=async (formdata)=>{
    const response = await axios.put(url+'auth/changePassword', formdata)
    return await response
}

export const getCateg=async ()=>{
    const response = await axios.get(url+'music/categ')
    return await response
}

export const addMusic = async (formdata) => {
    const response = await axios.post(url+'/add', formdata);
    return await response;
};

export const delMusic = async (id) => {
    const response = await axios.delete(url+'/delete/'+id);
    return await response;
};

