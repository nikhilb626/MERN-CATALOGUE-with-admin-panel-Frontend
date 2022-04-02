import React,{useEffect,useState} from 'react';
import { getOrderDetail } from '../service/orderaxios';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";


const OrderDetail = () => {

    const navigate=useNavigate();

    const [order,setOrder]=useState({});
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");

    const [product,setProduct]=useState([]);

    const {id}=useParams();

    const getData=async()=>{
        const dataRes=await getOrderDetail(id);
        setOrder(dataRes.data[0]);
        setDate(dataRes.data[0].SentDate.split(",")[0]);
        setTime(dataRes.data[0].SentDate.split(",")[1]);
        setProduct(dataRes.data[0].product)
    }



    useEffect(()=>{
        getData();
    },[]);

  return (
      <>
    <section id="orderDetail">
        <div className="top">
        <div className="backBtn">
          <button  onClick={() => navigate(-1)}><i class="fas fa-long-arrow-alt-left"></i>go Back</button>
          </div>

          <div className="heading">
              <h1>Enquiry Details</h1>
              <h3>Enquiry no. / {order._id}</h3>
          </div>

          <div className="datetime">
           Date : {date}
          </div>
      </div>



      <div className="rest">
          <div className="left">
              <div className="heading">
                  <h2>Customer Detail</h2>
              </div>
              <div className="cust_detail">
            <div className="col">
                <div className="row row1"> Name</div>
                <div className="row">{order.name}</div>
            </div>

            <div className="col">
                <div className="row row1"> Phone no.</div>
                <div className="row">{order.phone}</div>
            </div>
            <div className="col">
                <div className="row row1">Email</div>
                <div className="row">{order.email}</div>
            </div>
            {/* <div className="col">
                <div className="row row1">Address</div>
                <div className="row">{order.location}</div>
            </div> */}

            <div className="col">
                <div className="row row1">Message</div>
                <div className="row">{order.description}</div>
            </div>

            <div className="col">
                <div className="row row1">Enquiry Date</div>
                <div className="row">{date}</div>
            </div>

            <div className="col">
                <div className="row row1">Enquiry Time</div>
                <div className="row">{time}</div>
            </div>

              </div>
          </div>
          <div className="right">
          <div className="heading">
                <h2>Product Items</h2>
          </div>

<div className="prod_detail">
{
    product.map((item)=>{
        return (
            <>
            <div className="col">
                  <div className="row"><div className="imageProduct">
                      {/* <img src={`${item.src.slice(22)}`} alt="df" /> */}
       <img src={`https://api.worldofwhimsicaljewelz.com${item.src}`} alt="poto" />
       {/* <img src={`http://localhost:5000${item.src}`} alt="poto" /> */}

                  </div></div>
                <div className="row">
                    <div className="productname">{item.name}</div>
                    <div className="productmodel">{item.model}</div>
                    <div className="productcategory"><div className="caty">Category</div>
                    <div className="catname">{item.category}</div></div>
                </div>
              </div>
 
            </>
        )
    })
}

            
 
 
          </div>





          </div>
      </div>
    </section>

      </>
  )
};

export default OrderDetail;
