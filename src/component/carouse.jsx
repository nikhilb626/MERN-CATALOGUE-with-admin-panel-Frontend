import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom";

const Carouse = () => {

  const navigate=useNavigate();

    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        pauseOnHover: false,
        autoplaySpeed:3000
      };


      const handleLink=async()=>{
        navigate('/browse');
      }


    return (
        <>
        <div className="container">
        <Slider {...settings}>
      <div className="slide" id="slide1"  data-aos="zoom-out"
     data-aos-duration="1000"  data-aos-delay="1600" >
        <div className="container">
        <i><h2>World Of Whimsical<span>Jewelz</span></h2></i>
       <i> <h1>The Name</h1></i>
        <p>You can Trust</p>
        <button onClick={handleLink}>Show Products</button>
        </div>
      </div>
      <div className="slide" id="slide2"  data-aos="zoom-out"
     data-aos-duration="1000"  data-aos-delay="1600">
    <div className="container">
    <i> <h2>Jewellery Accessories</h2></i>
      
        <p>All Types of Jewellery Avialable</p>
        <button onClick={handleLink}>Show Products</button>
    </div>
      </div>


 
    </Slider> 

        </div>
        
        </>
    )
}

export default Carouse;
