import React,{useEffect,useState,useContext} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../service/productaxios';
import AuthContext from '../context/authcontext';



const FeaturedProduct = () => {

  const {addCart}=useContext(AuthContext);

    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      };



      const [featuredProducts,setFeaturedProducts]=useState([]);
 



      const getProduct=async()=>{
        const ProductRes=await getFeaturedProducts();
        setFeaturedProducts(ProductRes.data);
      console.log(ProductRes.data);

      }


      useEffect(()=>{
        getProduct();
      },[])






    return (
        <>
    <div className="featured_heading"  data-aos="fade-right"
     data-aos-duration="1000" >
        <h3  data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="500">Our Featured</h3>
        <h1  data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="700">PRODUCTS</h1>
    </div>

    <div className="featuredpara" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="1200" >Now is the time to purchase your favourite. Earrings, Necklaces, Nose Pins, and more are available to add to your jewellery collection. We sell gold, silver, and rose gold plated kundan, polki, American Diamond, Temple, Oxidize, Black Metal, and Onyx jewellery.</div>

    <div className="featured_box_cont" data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="500">
        
        <Slider {...settings}>


        {
          featuredProducts.map((prod)=>{
            return (
              <>
              <div className="slider">
     <div className="slideCont"  data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="700">
 <div className="image_cont">
       <img src={`https://api.worldofwhimsicaljewelz.com${prod.src}`} alt="poto" />
       {/* <img src={`http://localhost:5000${prod.src}`} alt="poto" /> */}
       {/* <img src={`/${prod.src}`} alt="poto" /> */}
       {/* <img src={`./${prod.src}`} alt="poto" /> */}
       {/* <img src={`./${prod.src.slice(22)}`} alt="poto" /> */}

      </div>
      <div className="detail_cont">
      <div className="name">{prod.name}</div>
      <div className="category">{prod.model}</div>

       <div className="link_detail"> <button onClick={()=>addCart(prod)}>Add To Wishlist</button></div>
      </div>

       </div>
      </div>

              </>
            )
          })
        }




   










 
    </Slider> 
</div>
        </>
    )
}

export default FeaturedProduct;
