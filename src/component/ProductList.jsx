import React,{useState,useEffect,useContext} from 'react';
import {getProducts,getProductCat} from "../service/productaxios";
import AuthContext from '../context/authcontext';

const ProductList = () => {


  const {addCart}=useContext(AuthContext);


  const [products,setProducts]=useState([]);

  const [catname,setCatname]=useState("All Product");

  const getProduct=async()=>{
    const ProductRes=await getProducts();
    setProducts(ProductRes.data);
    setCatname("All Product");
    
  }


  const getProductByCat=async(category)=>{
    const productCatRes=await getProductCat(category);
    setProducts(productCatRes.data);
    setCatname(category);
  }



  const [search,setSearch]=useState("");





  useEffect(()=>{
    getProduct();
  },[]);



  return (
    <>
    <section id="products">
    <div className="category">
    <div className="heading">PRODUCT CATEGORIES</div>
      <div className="btn"><button onClick={getProduct}>All Products</button> </div>
      <div className="btn"><button onClick={()=>getProductByCat('Neckwear')}>Neckwear</button></div>
      <div className="btn"><button onClick={()=>getProductByCat('Bracelate')}>Bracelate</button></div>
      <div className="btn"><button onClick={()=>getProductByCat('Rings')}>Rings</button></div>
      <div className="btn"><button onClick={()=>getProductByCat('Anklets')}>Anklets</button></div>
      <div className="btn"><button onClick={()=>getProductByCat('Bangles')}>Bangles</button></div>
      <div className="btn"><button onClick={()=>getProductByCat('Danglers')}>Danglers</button></div>
      <div className="btn"><button onClick={()=>getProductByCat('Watches')}>Watches</button></div>
      <div className="btn"><button onClick={()=>getProductByCat('Headbands')}>Headbands</button></div>
      <div className="btn"><button onClick={()=>getProductByCat('Earrings')}>Earrings</button></div>



     

    </div>
    
    <div className="list">
      <div className="heading">{catname}  <div className="inputsearch">
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Product by Name..." />
        <i class="fas fa-search"></i>
      </div></div>


   
      <div className="products_container">


{
  products.filter((val)=>{
                                    if(search===""){
                                        return val
                                    }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                                        return val
                                    }
                                }).map((product)=>{
    return (
      <>
  
      <div className="productCont" key={product._id}>
<div className="image_cont">
{/* <img src={`./${product.src.slice(22)}`} alt="poto" /> */}
<img src={`https://api.worldofwhimsicaljewelz.com${product.src}`} alt="poto" />
{/* <img src={`http://localhost:5000${product.src}`} alt="poto" /> */}

</div>
<div className="detail_cont">
<div className="name">{product.name}</div>
<div className="category">{product.model}</div>



<div className="link_detail">
<button onClick={()=>addCart(product)}>Add To Wishlist</button>

</div>
</div>

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

export default ProductList
