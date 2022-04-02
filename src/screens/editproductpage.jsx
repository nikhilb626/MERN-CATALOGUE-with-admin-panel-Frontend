import React,{useEffect} from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Editproduct from '../component/editproduct';


const EditProductPage = () => {


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    


    return (
        <>
        <Navbar />
        <Editproduct />
        <Footer />
        </>
    )
}

export default EditProductPage;