import React,{useContext} from 'react';
import {Route,Routes} from "react-router-dom";
import Homepage from './screens/homepage';
import Aboutpage from './screens/aboutpage';
// import Contactpage from './screens/contactpage';
import ProductListpage from './screens/ProductListpage';
import Logpage from './screens/logpage';
import Uploadpage from './screens/uploadpage';
import Orderspage from './screens/orderspage';
import Updatepage from './screens/updatepage';
// import Enquirypage from './screens/enquirypage';
// import ProductDetailpage from './screens/productDetailPage';
import Rfqpage from './screens/rfqpage';
import OrderDetailPage from "./screens/orderDetailPage";
// import Enquirydetailpage from "./screens/enquirydetailpage";

import Allproductpage from './screens/allproductpage';
import EditProductPage from "./screens/editproductpage";
import AuthContext from "./context/authcontext";

const NavRoute = () => {

    const {loggedIn,}=useContext(AuthContext);


    return (
        <>

        <Routes>

        {
            loggedIn?(
                <>
                <Route exact path="/" element={<Homepage />} />
        <Route path="/profile" element={<Aboutpage />} />
        {/* <Route path="/touch" element={<Contactpage />} /> */}
         <Route path="/browse" element={<ProductListpage/>} />
         <Route path="/log" element={<Logpage/>} />
         <Route path="/upload" element={<Uploadpage />} />
         <Route path="/orders" element={<Orderspage />} />
         <Route path="/update" element={<Updatepage />} />
         {/* <Route path="/enquiry" element={<Enquirypage />} /> */}
         {/* <Route path="/productDetail/:id" element={<ProductDetailpage />} /> */}
         <Route path="/rfq" element={<Rfqpage />} />
         <Route path="/orderDetail/:id" element={<OrderDetailPage />} />
         {/* <Route path="/enquiryDetail/:id" element={<Enquirydetailpage />} /> */}
         <Route path="/allproduct" element={<Allproductpage />} />
         <Route path="/edit/:id/:model" element={<EditProductPage />} />



        
                </>
            ):(
                <>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/profile" element={<Aboutpage />} />
        {/* <Route path="/touch" element={<Contactpage />} /> */}
         <Route path="/browse" element={<ProductListpage/>} />
         <Route path="/log" element={<Logpage/>} />
         {/* <Route path="/productDetail/:id" element={<ProductDetailpage />} /> */}
         <Route path="/rfq" element={<Rfqpage />} />



                </>
            )
        }


    

         </Routes>
            
        </>
    )
}

export default NavRoute;
