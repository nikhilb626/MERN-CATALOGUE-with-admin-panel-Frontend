import axios from "axios";


const adminUrl=`https://api.worldofwhimsicaljewelz.com/adminapi`;





export const loginUser=async(adminData)=>{
    return await axios.post(`${adminUrl}/login`,adminData);
}


export const logoutUser=async()=>{
 return await axios.get(`${adminUrl}/logout`);
}

export const loggedInUser=async()=>{
    return await axios.get(`${adminUrl}/loggedIn`);
}


export const updateUser=async(updateData)=>{
    return await axios.put(`${adminUrl}/updateAdmin`,updateData);
}

