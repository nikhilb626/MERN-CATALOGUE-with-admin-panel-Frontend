// import React,{useState,useEffect} from 'react';
// import { getAllEnquiry,countEnquiry } from '../service/enquiryaxios';
// import {Link} from "react-router-dom";


// const Enquiry = () => {


//     const [data,setData]=useState([]);

//     const [count,setCount]=useState("");


//     const getEnquiries=async()=>{
//         const response=await getAllEnquiry();
//         setData(response.data);

//         const counting=await countEnquiry();
//         setCount(counting.data);
//     }


//     useEffect(()=>{
//         getEnquiries();
//     },[]);







//   return (
//       <>
//             <section id="orders">
//             <div className="heading">
//                 <div className="num">{count}</div>
//                 <div className="nam">TOTAL Enquiry</div>
//             </div>

//  <table id="customers">
//   <tr>
//     <th>Customer Name</th>
//     <th>Phone</th>
//     <th>subject</th>
//     <th>action</th>
//   </tr>

// {
//     data.map((item)=>{
//         return (
//             <>

//             <tr>
//     <td>{item.name}</td>
//     <td>{item.phone}</td>
//     <td>{item.subject}</td>
//     <td><Link to={`/enquiryDetail/${item._id}`}>Detail</Link></td>

//   </tr>
 
//             </>
//         )
//     })
// }




// </table>
//         </section>
//       </>
//   )
// };

// export default Enquiry;
