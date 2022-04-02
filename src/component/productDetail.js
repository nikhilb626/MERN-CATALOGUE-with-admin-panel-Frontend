// import React,{useState,useEffect,useContext} from 'react';
// import {useNavigate,useParams} from "react-router-dom";
// import {getProductId} from "../service/productaxios"; 
// import AuthContext from '../context/authcontext';

// const ProductDetail = () => {
//     const navigate=useNavigate();

//     const {addCart}=useContext(AuthContext);



//     const {id}=useParams();

//     const [qty,setQty]=useState(1);


//     const [product,setProduct]=useState({});
//     const [src,setSrc]=useState("");




//     const getProduct=async()=>{
//         const prodRes=await getProductId(id);
//         // console.log("this is detail ",prodRes.da ta);
//         setProduct(prodRes.data[0]);
//         setSrc(prodRes.data[0].src.slice(22))
//     }




    

//     useEffect(()=>{
//         getProduct();
//     },[])



//   return (
//       <>
     
//         <section id="detailed">
//         <div className="backBtn">
//           <button  onClick={() => navigate(-1)}><i class="fas fa-long-arrow-alt-left"></i>go Back</button>
//       </div>
//             <div className="heading">Product Detail</div>
//             <div className="content">
//                 <div className="left">
//                     <img src={`${src}`} alt="phto" />
//                 </div>
//                 <div className="right">
//                 <div className="productName">{product.name}</div>
//                 <div className="productModel">{product.model}</div>
//                 <div className="productDesc">{product.description}</div>
//                 <div className="productCat">
//                     <div className="cat"><div className="catName">CATEGORY</div>
//                     <div className="catAns">{product.category}</div></div>
//                     <div className="quantity">
//                     <div className="quantityName">QUANTITY</div>
//                         <input type="number"  value={qty} min="1" onChange={(e)=>setQty(e.target.value)} />
//                     </div>
//                 </div>

//                 <div className="cart">
//                 <button onClick={()=>addCart(product)}>Add to RFQ</button>

//                 </div>
//                 </div>
//             </div>


           
//         </section>
//       </>
//   )
// };

// export default ProductDetail;
