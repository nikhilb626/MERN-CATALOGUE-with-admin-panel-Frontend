import './App.css';
import React,{useEffect} from "react";
// import {BrowserRouter} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NavRoute from './navRoute';
import axios from "axios";
import {AuthContextProvider} from "./context/authcontext";
import {CartProvider} from "react-use-cart";

axios.defaults.withCredentials=true;

function App() {

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[]);


  return (
<>

<AuthContextProvider>
<CartProvider>

{/* <BrowserRouter> */}
<HashRouter>
<NavRoute />

 </HashRouter>
{/* // </BrowserRouter> */}

</CartProvider>

</AuthContextProvider>

</>
  );
}

export default App;
