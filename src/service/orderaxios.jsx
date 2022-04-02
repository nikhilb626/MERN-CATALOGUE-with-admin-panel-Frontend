import axios from "axios";



const orderUrl=`https://api.worldofwhimsicaljewelz.com/orderapi`;




export const addOrderQuery=async(Data)=>{
    return await axios.post(`${orderUrl}/addOrder`,Data);
}



export const getOrderQuery=async()=>{
    return await axios.get(`${orderUrl}/getOrder`);
}


export const countOrderQuery=async()=>{
    return await axios.get(`${orderUrl}/countingorders`);
}


export const getOrderDetail=async(id)=>{
    return await axios.get(`${orderUrl}/getOrderdetail/${id}`);
}