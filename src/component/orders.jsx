import React,{useEffect,useState} from 'react';
import {getOrderQuery,countOrderQuery} from "../service/orderaxios";
import {Link} from "react-router-dom";

const Orders = () => {



  const [Order,setOrder]=useState([]);

  const [count,setCount]=useState("");

 const getData=async()=>{
    const dataRes=await getOrderQuery();
    // console.log(dataRes.data[0].product[0].name);
    setOrder(dataRes.data);
    const dataCountRes=await countOrderQuery();
    setCount(dataCountRes.data);

  }



  useEffect(()=>{
    getData();
  },[]);
  






  return (
      <>

        <section id="orders">
            <div className="heading">
                <div className="num">{count}</div>
                <div className="nam">TOTAL Enquiry</div>
            </div>

 <table id="customers" className="allorderstable">
  <tr>
    <th>Customer Name</th>
    <th>Phone</th>
    <th>Date</th>
    <th>actions</th>
  </tr>



{
  Order.map((item)=>{
    return (
      <>

      <tr>
    <td>{item.name}</td>
    <td>{item.phone}</td>
    <td>{item.SentDate.split(",")[0]}</td>
    <td><Link to={`/orderDetail/${item._id}`}>Detail</Link></td>

  </tr>

      </>

    )
  })
}



 


</table>















        </section>


        <section id="cart" className="allproductList allordlist">
    
    <div className="heading">
    <div className="custome">
        Name
    </div>
    <div className="phne">
        Phone
    </div>
    <div className="act">Action</div>
</div>

<div className="content">




{
Order.map((item)=>{
return (
    <>
<div className="orderelement">
<div className="custtname">
  <div className="naming">{item.name}</div>
  <div className="custdate">{item.SentDate.split(",")[0]}</div>
</div>

<div className="phoning">
 +91{item.phone}
</div>
<div className="rem deta"><Link to={`/orderDetail/${item._id}`}>Detail</Link></div>
</div>
</>
)})


}

</div>

</section>


      </>
  )
};

export default Orders;
