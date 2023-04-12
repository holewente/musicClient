import axios from 'axios';
let url="http://localhost:5000/"

export const checkUsername=async (formdata)=>{
    const response = await axios.post(url+'auth/checkUsername', formdata)
    return await response
    
}

export const login=async (formdata)=>{
    console.log(formdata,"login")
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

export const deleteUser=async (id)=>{
    const response = await axios.get(url+'auth/deleteUser/'+id)
    return await response
}
export const deleteMusic=async (id)=>{
    const response = await axios.get(url+'music/deleteMusic/'+id)
    return await response
}

export const changePassword=async (formdata)=>{
    const response = await axios.put(url+'auth/changePassword', formdata)
    return await response
}

export const getCateg=async ()=>{
    const response = await axios.get(url+'music/categ')
    return response
}
export const getUrl=async ()=>{
    const response = await axios.get(url+'music/url')
    return response
}


export const addMusic = async (formdata) => {
    console.log("addMusic",url)
    const response = await axios.post(url+'music/add', formdata);
    return response;
};

export const delMusic = async (id) => {
    const response = await axios.delete(url+'user/delete'+id);
    return await response;
};

export const getUsers = async () => {
    const response = await axios.get(url+'auth/users');
    return await response;
};
export const getMusic = async () => {
    const response = await axios.get(url+'music/library');
    return await response;
};

export const addFavorite=async (formdata)=>{
    const response = await axios.post(url+'auth/addFavorite', formdata)
    return await response
    
};

export const getFavorites = async ({queryKey}) => {
    console.log(queryKey)
    const response = await axios.get(url+'auth/getFavorites/'+queryKey[1]);
    return response;
};