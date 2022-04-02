import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
    <div id="footer" className="footer">
    {/* <img src="./media/foo.jpg" alt="fd" /> */}

    <div className="prefoot">
        <div className="col">
            <div className="heading" data-aos="fade-up"
     data-aos-duration="1000"  >CONTACT INFORMATION</div>
           
            {/* <div className="point" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="100"> <div className="icon">
                <i class="fas fa-map-marker-alt"></i>
                </div>
                <div className="detail">400,Silver business point India</div></div> */}
            <div className="point" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="200"> <div className="icon">
                <i class="fas fa-phone"></i>
</div>
<div className="detail">
    +91 9810563068 
</div></div>
            <div className="point" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="300">
            <div className="icon">
<i class="fas fa-envelope"></i>
</div>
<div className="detail">seema19jain@gmail.com</div>
            </div>
               



            </div>
          

        <div className="col">
            <div className="heading" data-aos="fade-up"
     data-aos-duration="1000" >YOUR ACCOUNT</div>
           
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="200"> <Link to="/profile"> Personal Info</Link></div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="300">
     <Link to="/rfq">Wishlist</Link>
     </div>
           
     <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="500"><Link to="/log">Admin</Link></div>
      

        </div>
        <div className="col">
            <div className="heading" data-aos="fade-up"
     data-aos-duration="1000">PRODUCTS</div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="100"><Link to="/browse">Neckwear</Link></div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="200"><Link to="/browse">Bracelate</Link></div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="300"> <Link to="/browse">Rings</Link></div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="400"><Link to="/browse">Anklets</Link></div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="500"><Link to="/browse">Bangles</Link></div>
        </div>
     
        <div className="col">
        <div className="heading" data-aos="fade-up"
     data-aos-duration="1000" >SOCIAL MEDIA</div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="100"><a href="https://api.whatsapp.com/send?phone=+919810563068">Whatsapp link</a></div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="200"><a href="https://www.facebook.com/photo.php?fbid=985486705350615&set=a.100568440509117&type=3">Facebook Link</a></div>
            <div className="list" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="300"> <a href="https://www.instagram.com/reel/CZ0__X7przO/?utm_medium=share_sheet">Instagram link</a></div>
       
        </div>

    </div>

    <div className="main" >
        @2022, worldOfWhimsicalJewelz.Powered by <a href="https:\\febtech.in">Febtech.in
</a>     </div>

    </div>
        </>
    )
}

export default Footer;
