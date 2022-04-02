import React,{useEffect} from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
// import Rfq from "../component/rfq";
import Cart from '../component/cart';

const Rfqpage = () => {


  useEffect(()=>{
    window.scrollTo(0, 0);
},[])




  return (
      <>
        <Navbar />
        {/* <Rfq /> */}
        <Cart />
        <Footer /> 
      </>
  )
};

export default Rfqpage;
