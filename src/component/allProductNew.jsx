import React,{useEffect,useState} from 'react';
import {getProductsAdmin,getProductCatAdmin,CountProductsAdmin,CountProductCatAdmin,DeleteProductIndividual} from '../service/productaxios';
import {Link} from "react-router-dom";


const AllProductNew = () => {


    const [products,setProducts]=useState([]);
    const [count,setCount]=useState(0);


    const [cat,setCat]=useState(() => {
        const stickyValue = window.localStorage.getItem("cat");
        return stickyValue !== null
          ? JSON.parse(stickyValue)
          : "";
      });



    const getData=async()=>{
        const Res=await getProductsAdmin();
        setProducts(Res.data);

        const Res2=await CountProductsAdmin();
        setCount(Res2.data);
        
    
    }


    const handleget=async()=>{
        if(cat===""){
            getData();
        }
        else if(cat!==""){
            const Res=await getProductCatAdmin(cat);
            setProducts(Res.data);
            const Res2=await CountProductCatAdmin(cat);
            setCount(Res2.data);


        }

    }


    const handleDelete=async(id,src)=>{
        await DeleteProductIndividual(id);

        if(cat===""){
        getData();

        }else if(cat!==""){
            handleget(cat);
        }
    }


    useEffect(()=>{
        getData();
        localStorage.setItem("cat",JSON.stringify(cat));

    },[cat]);




  return (
      <>

      <section id="Productalllist">
      <div className="heading">
    Product List (result-{count})
</div>



<div className="top">

    <div className="select_productCat">
    <select name="category" id="category" onChange={(e)=>setCat(e.target.value)} className="category_allpage">
                <option value="" selected class="nonselect" disabled>Select Category</option>
                <option value="">All</option>

                  <option value="Neckwear">Neckwear</option>
                  <option value="Bracelate">Bracelate</option>
                  <option value="Rings">Rings</option>
                  <option value="Anklets">anklets</option>
                  <option value="Bangles">Bangles</option>
                  <option value="Danglers">Danglers</option>
                  <option value="Watches">Watches</option>
                  <option value="Headbands">Headbands</option>
                  <option value="Earrings">Earrings</option>

                  
                </select>

                <button onClick={handleget}>get</button>
    </div>

    <div className="upload_link">
    <Link to="/upload">Add New Product</Link>
    </div>
   
</div> 

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
          products.map((item)=>{
              return (
                  <>
        <div className="layer" key={item._id}>
      
        <div className="prodnaming">
        <div className="image_cont">
                <img src={`https://api.worldofwhimsicaljewelz.com${item.src}`} alt="po" />
                {/* <img src={`http://localhost:5000${item.src}`} alt="po" /> */}
         </div>
         <div className="proding">
         <div className="prodname">{item.name}</div>
         <div className="prodcategory">{item.category}</div>

         </div>
        </div>

        <div className="modeling">{item.model}</div>
    
        <div className="rem"> <div className="links_list">
    <Link to={`/edit/${item._id}/${item.model}`}><i class="far fa-edit"></i></Link>
        <span onClick={()=>handleDelete(item._id)}><i class="far fa-trash-alt"></i></span>  
    </div></div>

        </div>
            
                  </>
              )
          })
      }




</div>
 

</div>


      

 


      </section>

      </>
  )
};

export default AllProductNew;
