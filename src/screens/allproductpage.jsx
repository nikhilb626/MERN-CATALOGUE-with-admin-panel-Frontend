import React,{useEffect} from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
// import Allproduct from '../component/Allproduct';
import AllProductNew from '../component/allProductNew';



const Allproductpage = () => {


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    

    return (
        <>
        <Navbar />
        {/* <Allproduct /> */}
        <AllProductNew />
        <Footer />
        </>
    )
}

export default Allproductpage;
