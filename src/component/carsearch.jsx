import React from 'react';
import { useNavigate } from 'react-router-dom';

const Carsearch = () => {

    const navigate=useNavigate();

    const explore=async()=>{
        navigate("/browse");
    }


    return (
        <>

        <section id="carsearch" data-aos="fade-up"
     data-aos-duration="1000" >
            <div className="heading"  data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="100">Find Your <span> Perfect </span>Jewellery <span> Accessories</span></div>

            <div className="searchbar" data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="300">
              
              


            <div className="element-four"><button onClick={explore} className="btn">BROWSE PRODUCTS</button></div>
            </div>


    
            </section>
        </>
    )
}

export default Carsearch;
