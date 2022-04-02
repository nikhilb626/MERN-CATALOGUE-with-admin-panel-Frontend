import React,{useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const About = () => {


    const navigate=useNavigate();


    const handleLink=async(e)=>{
     e.preventDefault();
    navigate("/touch");
    }



    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


    return (
        <>
    <section id="aboutMain">
        <div className="heading" data-aos="fade-left"
     data-aos-duration="1000" >About Us</div>

        <div className="content">
            <div className="left" data-aos="fade-right"
     data-aos-duration="1000"  data-aos-delay="100">
                <img src="./media/bride2.jpeg" alt="fdg" />
            </div>
            <div className="right">
                <div className="head" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="300">We Have EveryThing You Need</div>
                <div className="para" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="500">Imitate jewellery might help you step up your style game. Now is the time to purchase your favourite. Earrings, Necklaces, Nose Pins, and more are available to add to your jewellery collection.
</div>

<div className="para" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="700">
We are pleased to introduce ourselves as a distributor and exporter of various types of counterfeit jewellery over the past many years, with thousands of satisfied customers across India. We sell gold, silver, and rose gold plated kundan, polki, American Diamond, Temple, Oxidize, Black Metal, and Onyx jewellery. From prominent manufacturers, we always buy high-quality and well-designed products for all kinds of occasions such as weddings, engagements, partywear, and everyday use. Customer happiness is always our top goal, and we strive to provide the greatest product that is also skin-friendly.</div>
            
            </div>

            
            </div>
          
    </section>


    {/* <section id="services">
        <div className="heading" data-aos="fade-left" data-aos-duration="1000" >OUR SERVICES</div>
        <div className="service">
            <div className="col" data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="300">
                <div className="icon"><i class="fas fa-tachometer-alt"></i></div>
                <div className="head" >FREE RESOURCE</div>
                <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat placeat ab nostrum debitis quaerat!</div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="600">
                <div className="icon"><i class="fas fa-calculator"></i></div>
                <div className="head">MULTIPURPOSE</div>
                <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia dolores aspernatur. Sit, aliquid suscipit?</div>
            </div>
            <div className="col" data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="300">
                <div className="icon"><i class="far fa-lightbulb"></i></div>
                <div className="head">FULLY RESPONSIVE</div>
                <div className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam harum laboriosam laudantium sed voluptatibus!</div>
            </div>

        </div>
    </section> */}

    {/* <section id="aboutMain">
       
        <div className="content">
           
            <div className="right">
                <div className="head" data-aos="fade-right"
     data-aos-duration="1000"  data-aos-delay="300">We Have EveryThing You Need</div>
                <div className="para" data-aos="fade-right"
     data-aos-duration="1000"  data-aos-delay="500">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</div>
                <div className="subhead" data-aos="fade-right"
     data-aos-duration="1000"  data-aos-delay="100">Sample Unordered List</div>
                <ul>
                    <li data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, quod.</li>
                    <li data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. .</li>
                    <li data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="700">Lorem ipsum dolor, sit amet consectetur adipisit. Illum, quod.</li>
                    <li data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="900">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, quod.</li>
                    <li data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="1000">Lorem ipsum dolor, sit amet consecdipisicing elit. Illum, quod.</li>

                </ul>


                <div className="btn" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="1200"><button onClick={handleLink}>Contact Us</button></div>
            </div>

            <div className="left" data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="100">
                <img src="./media/about2.jpeg" alt="fdg" />
            </div>

        </div>
    </section> */}

        </>
    )
}

export default About;
