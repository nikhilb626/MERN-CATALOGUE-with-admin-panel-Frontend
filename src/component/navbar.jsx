import React,{useState,useContext,useEffect} from 'react';
import {NavLink} from "react-router-dom";
import { logoutUser } from '../service/adminaxios';
import AuthContext from '../context/authcontext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate=useNavigate();

    const {getLoggedIn,loggedIn,cartCount}=useContext(AuthContext);



    
    const [prevScrollPos,setPrevScrollPos]=useState(0);

    const [top,setTop]=useState("navbar");

    const handleScroll=()=>{
        const currentScrollPos=window.pageYOffset;
        
        if(currentScrollPos>prevScrollPos){
            setTop("navbar navHide");
        }else{
            setTop("navbar");

        }

        setPrevScrollPos(currentScrollPos);

    }




    const handleLogout=async()=>{
        try{
            await logoutUser();
            await getLoggedIn();
            navigate("/");
            setTG("toggleNav");
            console.log('log out successful from button');
        }catch(err){
            console.log(err);
            console.log("not workin button");
        }
      


    }
    

    const [TG,setTG]=useState("toggleNav");


    const handleHide=()=>{
        setTG("toggleNav");
    }

    const handleShow=()=>{
        setTG("toggleNav show");
    }





    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);
    },[prevScrollPos,top,handleScroll]);




    return (
        <>
    <div className={top}>
        <div className="logo" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="700">
           <NavLink  exact to="/" > <img src="/media/png.png" alt="logo" /></NavLink>
        
     </div>

        <div className="links">

        {
            loggedIn?(<>
                <NavLink  exact to="/"  activeClassName="active"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1600">HOME</NavLink>
    <NavLink to="/profile"  activeClassName="active"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1300">COMPANY PROFILE</NavLink>
    <NavLink to="/browse"  activeClassName="active"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1000">OUR PRODUCTS</NavLink>
    
      <NavLink to="/rfq" activeClassName="active"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1000" >WISHLIST <span className={`${cartCount}`<1?"notice none":"notice"}>{cartCount}</span></NavLink>



<div class="subnav"  >
    <button class="subnavbtn">ADMIN PANEL<i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <button onClick={handleLogout} >Logout</button>
      <NavLink to="/update">UPDATE PROFILE</NavLink>
      <NavLink to="/orders">ORDERS</NavLink>
      <NavLink to="/allproduct">ALL PRODUCT</NavLink>

      

    </div>
  </div> 
            </>):(
                <>
         <NavLink  exact to="/"  activeClassName="active"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1600">HOME</NavLink>
    <NavLink to="/profile"  activeClassName="active"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1300">COMPANY PROFILE</NavLink>
    <NavLink to="/browse"  activeClassName="active"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1000">OUR PRODUCTS</NavLink>
     
      <NavLink to="/rfq"   activeClassName="active"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1000">WISHLIST<span className={`${cartCount}`<1?"notice none":"notice"}>{cartCount}</span></NavLink>


                </>
            )
        }
        


        </div>



        <NavLink to="/rfq" className="carty"  data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1000"> <i class="fas fa-shopping-cart"></i><span className={`${cartCount}`<1?"notice none":"notice"}>{cartCount}</span></NavLink>


    

        <div className="hamburger" onClick={handleShow} data-aos="fade-left"
     data-aos-duration="3000"  data-aos-delay="800">
        <i class="fas fa-bars"></i>
        </div>

    </div>


    <div className={TG}>
        <div className="closeBtn" onClick={handleHide} ><i class="fas fa-times"></i></div>
        <div className="toggle_list">
        {
            loggedIn?(
                <>
                <NavLink  exact to="/"  activeClassName="active"  >HOME</NavLink>
    <NavLink to="/profile"  activeClassName="active"  >COMPANY PROFILE</NavLink>
    <NavLink to="/browse"  activeClassName="active" >OUR PRODUCTS</NavLink>
<NavLink to="/rfq" activeClassName="active">WISHLIST <span className={`${cartCount}`<1?"notice none":"notice"}>{cartCount}</span></NavLink>

      <NavLink to="/allproduct">ALL PRODUCT</NavLink>
      <NavLink to="/update">UPDATE PROFILE</NavLink>
      <NavLink to="/orders">ORDERS</NavLink>
<button onClick={handleLogout} >Logout</button>
                </>
            ):(
                <>
    <NavLink  exact to="/"  activeClassName="active"  >HOME</NavLink>
    <NavLink to="/profile"  activeClassName="active"  >COMPANY PROFILE</NavLink>
    <NavLink to="/browse"  activeClassName="active" >OUR PRODUCTS</NavLink>
<NavLink to="/rfq" activeClassName="active">WISHLIST <span className={`${cartCount}`<1?"notice none":"notice"}>{cartCount}</span></NavLink>
                </>
            )
        }

   

        </div>
    </div>
        </>
    )
}

export default Navbar;
