import React,{useState} from 'react';

const Testimonials = () => {



    const [cls,setCls]=useState(0);
    const [count,setCount]=useState(1);


    const handleup=()=>{
        if(cls>-900){
            setCls(cls-300);
            setCount(count+1);
        }
       
    }



    const handledown=()=>{
        if(cls<0){
            setCls(cls+300);
            setCount(count-1);


        }
    }





  return (
      <>
      <section id="testimonials">


      <div className="heading"  data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="100">TESTIMONIALS</div>

<div className="review-box"  data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="400">

<div id="slide" style={{top:`${cls}px`}} >
    <div className="card">
        <div className="profile">
            <img src="./media/avtar2.png" alt="prof" />
            <div>

                <h3>Raghu Sanyal </h3>
                {/* <p>web designer</p> */}
            </div>

        </div>
        <p><i class="fa-solid fa-quote-left"></i> I had been looking around for a birthday present for my mother with not much luck. We both love silver jewellery and I wanted something delicate and unique to suit her tastes. I was lucky enough to find this website and bought a beautiful pendant. Needless to say, my mother loved it</p>
    </div>
   
    <div className="card">
        <div className="profile">
            <img src="./media/avtar.png" alt="prof" />
            <div>

                <h3>Sarojini Chadda</h3>
                {/* <p>right hand</p> */}
            </div>

        </div>
        <p><i class="fa-solid fa-quote-left"></i> The simplicity of design is one of my favourite aspects of your's work. I wear her pieces to work, weekends, and special occasions. They always make me look well-dressed. I enjoy assisting a local artist that crafts classic and wearable jewellery.</p>
    </div>

     
    <div className="card">
        <div className="profile">
            <img src="./media/avtar3.png" alt="prof" />
            <div>

                <h3>Mamta Patel</h3>
                {/* <p>right hand</p> */}
            </div>

        </div>
        <p><i class="fa-solid fa-quote-left"></i> The items are just as they show on the website, modern with a reference to traditional style, and of excellent quality... It's fantastic!</p>
    </div>



     
    <div className="card">
        <div className="profile">
            <img src="./media/avtar4.png" alt="prof" />
            <div>

                <h3>Neha Mukhtar</h3>
                {/* <p>right hand</p> */}
            </div>

        </div>
        <p><i class="fa-solid fa-quote-left"></i> I recently received two pieces of Simone Walsh jewellery, which I like. Her creations are one-of-a-kind, delicate, and lovely. I was then encouraged to purchase some earrings as a gift for a friend, who loved them as well.</p>
    </div>
     
</div>

<div className="sidebar">
        
<i class="fa fa-arrow-up" id="upArrow" onClick={handledown}></i>
<div className="indexes">{count}/4</div>

<i class="fa fa-arrow-down" id="downArrow" onClick={handleup}></i>
</div>
</div>


</section>

      </>
  )
};

export default Testimonials;
