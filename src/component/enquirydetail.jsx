// import React, { useEffect ,useState} from 'react';
// import { getEnquiryInd } from '../service/enquiryaxios';
// import { useParams,useNavigate } from 'react-router-dom';

// const Enquirydetail = () => {

//     const {id}=useParams();



//     const [enq,setEnq]=useState({});

//     const [date,setDate]=useState("");

//     const navigate=useNavigate();


//     const getData=async()=>{
//         const enquiryRes=await getEnquiryInd(id);
//         setEnq(enquiryRes.data[0]);
//         setDate(enquiryRes.data[0].enqDate.split(",")[0]);
//     }



//     useEffect(()=>{
//         getData();
//     },[])


//   return (
//       <>
    
    
// <section id="enquiryDet">
// <div className="backBtn">
//           <button  onClick={() => navigate(-1)}><i class="fas fa-long-arrow-alt-left"></i>go Back</button>
//       </div>
//     <div className="enquiry_container">
//         <div className="header">
//             <div className="name">Name : {enq.name}</div>
//             <div className="date">date : {date}</div>
//         </div>
//         <div className="subject">subject : {enq.subject}</div>
//         <div className="message">{enq.message}</div>

//         <div className="contacts">
//             <div className="heading">Contact Detail</div>
//             <div className="cont_detail">
//                 <div className="name">Email</div>
//                 <div className="ans">{enq.email}</div>
//             </div>

//             <div className="cont_detail">
//                 <div className="name">Phone no.</div>
//                 <div className="ans">+91 {enq.phone}</div>
//             </div>
//         </div>
//     </div>
// </section>

//       </>
//   )
// };

// export default Enquirydetail;
