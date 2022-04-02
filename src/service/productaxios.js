import axios from "axios";



const productUrl=`https://api.worldofwhimsicaljewelz.com/productapi`;





export const addImage=async(Data,config)=>{
    return await axios.post(`${productUrl}/addImage`,Data,config);
}


export const addProduct=async(data)=>{
    return await axios.post(`${productUrl}/addProduct`,data);
}


export const getProducts=async()=>{
    return await axios.get(`${productUrl}/getProducts`);
}


export const getFeaturedProducts=async()=>{
    return await axios.get(`${productUrl}/getFeatured`);
}


export const getProductCat=async(category)=>{
    return await axios.get(`${productUrl}/getProductCategory/${category}`)
}

export const getProductId=async(id)=>{
    return await axios.get(`${productUrl}/getproductbyid/${id}`)
}


export const getProductsAdmin=async()=>{
    return await axios.get(`${productUrl}/getadminproducts`);
}


export const getProductCatAdmin=async(category)=>{
    return await axios.get(`${productUrl}/getadmincat/${category}`);
}


export const CountProductsAdmin=async()=>{
    return await axios.get(`${productUrl}/countproducts`);
}


export const CountProductCatAdmin=async(category)=>{
    return await axios.get(`${productUrl}/countproductcat/${category}`);
}


export const DeleteProductIndividual=async(id)=>{
    return await axios.delete(`${productUrl}/deleteproduct/${id}`);
}



export const getProductAdminId=async(id)=>{
    return await axios.get(`${productUrl}/getadminproductid/${id}`);
}

export const UpdateProductIndividual=async(id,Data)=>{
    return await axios.put(`${productUrl}/updateproduct/${id}`,Data);
}