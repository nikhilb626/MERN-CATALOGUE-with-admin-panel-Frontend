import React,{useContext,useState} from 'react';
import AuthContext from "../context/authcontext";
import {addOrderQuery} from "../service/orderaxios";
import {useNavigate} from "react-router-dom";

const Cart = () => {


    const navigate=useNavigate();

    const {cart,removeItem,removeAll}=useContext(AuthContext);



    const [success,setSuccess]=useState("successCont");



    const [error,setError]=useState("");


    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [description,setDescription]=useState("");

    const getDelete=async(id)=>{
        await  removeItem(id);
      }
  


 const handledeleteAll=async()=>{
        await removeAll();
    }


    const handleButn=async()=>{
        navigate("/browse");
    }



    const handleSubmit=async(e)=>{
        e.preventDefault();
            try{
                if(name==="" || email==="" || description==="" || phone==="" ){
                  setError("please fill the form properly");
                // console.log("please fill the form properly");
          
                }
                else if(name!=="" && email!=="" && description!=="" && phone!==""){
          
                    const SentDate=new Date().toLocaleString();

                    const orderObj={
                     name,phone,description,email,SentDate,product:cart
                     
                    }
          
                    await addOrderQuery(orderObj);
                    setName("");
                    setEmail("");
                    setDescription("");
                    setPhone("");
                    // setLocation("");
                    setError("");
                    await removeAll();
                     setSuccess("successCont show");

          
          
                }
        }catch(err){
            setError(err.response.data.errorMessage);
            // console.log(err);

        }
    }





  return (
      <>
   
<section id="newcart">

<div className={success}>
   <div> sent Successfully</div>
        <button className="closeBtn" onClick={()=>setSuccess("successCont")} >X</button>
        </div>


{
    cart.length>0?(
        <>

        
        <div id="allproductlisting">
<div className="head">
    <div className="productname">
        Product
    </div>
    <div className="quantity">
        Model
    </div>
    <div className="remove">Action</div>
</div>

<div className="allproductcontent">


{
          cart.map((item)=>{
              return (
                  <>

        <div className="layer" key={item._id}>
      
        <div className="prodnaming">
         <div className="proding">
         <div className="prodname">{item.name}</div>
         <div className="prodcategory">{item.category}</div>

         </div>
        </div>

        <div className="modeling">{item.model}</div>
    
        <div className="rem"> <div className="links_list">
 <span onClick={()=>getDelete(item._id)}><i class="far fa-trash-alt"></i></span>  
    </div></div>

        </div>


            
                  </>
              )
          })
      }

      <div className="clearBtn">
    <button onClick={handledeleteAll}>Clear All</button>
</div>
            
        </div>


<section id="form" className="form2">
<fieldset className="log">
              <h2>Enter Your Details</h2>
                <input type="text" placeholder="Enter Your Name"  value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="number" placeholder="Enter Phone No.(without code)" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                {/* <input type="text" placeholder="Enter Your Location" value={location} onChange={(e)=>setLocation(e.target.value)} /> */}
          

              
                <textarea name="description" id="" cols="30" rows="10" placeholder="Enter your query" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

                <div className="error_container">{error}</div>

                <button onClick={handleSubmit}>SEND</button>
              </fieldset>
</section>


</div>
 

            
        </>
    ):(
        <>
        <div className="warning">No Cart Items to Show</div>
                <div className="expBtn">
                    <button onClick={handleButn}>EXPLORE</button>
        </div>
        </>
    )
}

        </section>  
      </>
  )
};

export default Cart;
