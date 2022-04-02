import React,{useState} from 'react';
import { addEnquiry } from '../service/enquiryaxios';


const Contact = () => {

    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [phone,setPhone]=useState("");
    // const [subject,setSubject]=useState("");
    // const [message,setMessage]=useState("");
    // const [success,setSuccess]=useState("successCont");


    // const [error,setError]=useState("");



    // const handleEnquiry=async(e)=>{
    //     e.preventDefault();

    //     try{
    //         if(name==="" || phone==="" || email==="" || subject==="" || message===""){
    //             setError("please fill the form properly");

    //         }
    //         else if(name!=="" && phone!=="" &&email!=="" && subject!=="" && message!==""){

    //             const enqDate=new Date().toLocaleString();

    //             const EnquiryObj={
    //               name,phone,email,subject,message,enqDate
    //             }

    //             // console.log(AppointObj);
    //           await addEnquiry(EnquiryObj);
    //         setName("");
    //         setPhone("");
    //         setEmail("");
    //         setSubject("");
    //         setMessage("");
    //         setError("");

    //         setSuccess("successCont show");
    //         }
    //     }
    //     catch(err){
    //         // console.log(err);
    //         setError(err.response.data.errorMessage);
    //     }

    // }



    return (
        <>

{/* <div className={success}>
   <div> sent Successfully</div>
        <button className="closeBtn" onClick={()=>setSuccess("successCont")} >X</button>
        </div> */}


         <div className="heading" data-aos="fade-right"
     data-aos-duration="1000"  >
             {/* <h3 data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="300">Got a Question ?</h3> */}
             <h1 data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="500">CONNECT WITH US</h1>
         </div>



         <div className="content_container">


         <div className="social whats"  data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="100"><a href="https://api.whatsapp.com/send?phone=+919810563068"><i class="fab fa-whatsapp"></i></a></div>
         <div className="social face"  data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="300"><a href="https://www.facebook.com/photo.php?fbid=985486705350615&set=a.100568440509117&type=3"><i class="fab fa-facebook-f"></i></a></div>
         <div className="social insta"  data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="600"><a href="https://www.instagram.com/reel/CZ0__X7przO/?utm_medium=share_sheet"><i class="fab fa-instagram"></i></a></div>
       

             {/* <div className="left">    */}
             
              
             {/* <form className="contact_form" > */}
           {/* <div className="inputs" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="300">
             <input type="text" placeholder="Full Name"  value={name} onChange={(e)=>setName(e.target.value)} />
             </div>

     
     <div className="inputs" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="300">
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

     </div>

     <div className="inputs" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="300">
            <input type="text" placeholder="Phone No." value={phone} onChange={(e)=>setPhone(e.target.value)} />

     </div>
           

             <div className="inputs" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="600">
            <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} />
           
             </div>

<div className="textArea" data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="800"> <textarea  placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea></div>
           
             
     <div className="error_container">{error}</div>
            <div className="btn_container" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1200">
                <button onClick={handleEnquiry}>SEND</button>
            </div>

         </form>  */}

         {/* </div> */}
             {/* <div className="right">
             <div className="scan" data-aos="fade-left"
     data-aos-duration="1000"  data-aos-delay="1400">Our Support</div>
                 <div className="photo_container" data-aos="zoom-in"
     data-aos-duration="1000"  data-aos-delay="1700">
                     <img src="./media/qr.png" alt="" />
                 </div>
             </div> */}
         </div>

     
        </>
    )
}

export default Contact;
