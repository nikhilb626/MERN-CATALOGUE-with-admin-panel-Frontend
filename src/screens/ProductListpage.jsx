import React,{useEffect} from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import ProductList from '../component/ProductList';

const ProductListpage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
  return (
      <>
          <Navbar />
          <ProductList />
          <Footer />
      </>
  )
};

export default ProductListpage;
