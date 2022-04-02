import React from 'react';
// import { Link } from 'react-router-dom';
import FeaturedProduct from './featuredProduct';
import Contact from "./contact";
import Footer from './footer';
import Carsearch from '../component/carsearch';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Testimonials from './testimonials';


const Body = () => {
    return (
        <>



<section id="info">

<div className="top">
    <div className="col col1"  data-aos="fade-right"
     data-aos-duration="1000"><div className="head">Punctual Delivery Time</div>
    <div className="subhead">99% Delivered On Time</div></div>
    <div className="col col2"  data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="100"><div className="head">High Technology Factory</div>
    <div className="subhead">& Environment Friendly </div></div>
    <div className="col col3"  data-aos="fade-left"
     data-aos-duration="1000" data-aos-delay="300"><div className="head">High Standard Labors</div>
    <div className="subhead">99% QC passed</div></div>
</div>



           
    </section>

    <section id="profile">
            <div className="left">
                <div className="heading" data-aos="fade-up"
     data-aos-duration="1000">
                    OUR PROFILE
                </div>

            <div className="para" data-aos="fade-right"
     data-aos-duration="1000" data-aos-delay="100">
             Up your style game with imitation jewellery. Buy your favorite now. Update your Jewelry box with Earrings, Necklaces, Nose Pins & more.
We have a great pleasure to introduce products, a wholesaler & exporter of all kind of imitation Jewellery from last many years with thousand of happy customers all over India. We deal in kundan, polki, American Diamond, Temple, Oxidize, Black Metal, Onyx jewelry like gold plated, silver plated & rose gold plated. We always procure quality and well design products for all kind of occasions like wedding, engagement, partywear and regular purposes from leading manufactures. We always take priority to customer satisfaction and deliver the best product with 100% skin friendly.
            </div>

    <div className="photo_container">
      <div className="b" id="b1" data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="100">
      <div className="pic"><img src="./media/pr.png" alt="gsd" /></div>
      <div className="name"> <h3>Bracelates</h3></div>
     
        
      </div>
      <div className="b" id="b2" data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="300">
      <div className="pic"><img src="./media/pr1.png" alt="gsd" /></div>
      <div className="name"> <h3>Neckwear</h3></div>
     
      </div>
      <div className="b" id="b3" data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="500">
      <div className="pic"><img src="./media/pr2.png" alt="gsd" /></div>
      <div className="name"> <h3>Bangles</h3></div>
     
      </div>
      <div className="b" id="b4" data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="700">
      <div className="pic"><img src="./media/pr3.png" alt="gsd" /></div>
      <div className="name"> <h3>Rings</h3></div>
     
      </div>

    </div>
            </div>
            <div className="right">
                <div className="photo_cont" data-aos="fade-left"
     data-aos-duration="1000" data-aos-delay="300">
                    <img src="./media/2.png" alt="yf" />
                </div>
            </div>
        </section>

        <Carsearch />




   
    <section id="featured">
        <FeaturedProduct/>
    </section>




    <section id="exp">
    <div className="quest"  data-aos="fade-right"
     data-aos-duration="1000"><span> Number</span> Speak For Themselves!</div>

   

      <div className="ans"  data-aos="fade-left"
     data-aos-duration="1000" data-aos-delay="100">
          <div className="left"  data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="700"> <CountUp end={500} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>+</div>
          <div className="right"  data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="800">Products</div>
      </div>

      <div className="ans"  data-aos="fade-left"
     data-aos-duration="1000" data-aos-delay="100">
          <div className="left"  data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="700"> <CountUp end={5000} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>+</div>
          <div className="right" data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="800">Clients</div>
      </div>

    </section>



    <Testimonials />

    

    <section id="contact">
        <Contact />
    </section>



    <section id="footer">
        <Footer />
    </section>
        </>
    )
}

export default Body;
