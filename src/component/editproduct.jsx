import React,{useEffect,useState} from 'react';
import {useParams,useNavigate } from 'react-router-dom';

import {getProductAdminId,addImage,UpdateProductIndividual} from "../service/productaxios";


const Editproduct = () => {

    const navigate=useNavigate();


    const {id}=useParams();

    const [formBtn,setFormBtn]=useState("formeditbtn");
    const [inpDiv,setInpDiv]=useState("inp hide");





    const [name,setName]=useState("");
    const [model,setModel]=useState("");
    const [category,setCategory]=useState("");
    // const [description,setDescription]=useState("");
    const [src,setSrc]=useState("");
    const [src1,setSrc1]=useState("");
  
  
  
    // const [error,setError]=useState("");





    const getSetup=async()=>{
        const res=await getProductAdminId(id);
        setName(res.data[0].name);
        setModel(res.data[0].model);
        setCategory(res.data[0].category);
        // setDescription(res.data[0].description);
        setSrc(res.data[0].src);


    }




    const handleUpdatePhoto=async()=>{
        setFormBtn("formeditbtn hide");
        setInpDiv("inp");
    }


    useEffect(()=>{
        getSetup();
    },[]);




    


    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        try {
            const bodyFormData = new FormData();
            const config={
                header:{'content-type':'multipart/form-data'}
            }
            bodyFormData.append('file', file);
            const imageResponse=await addImage(bodyFormData,config);
    
            console.log("this is image response",imageResponse.data);
    
            if(imageResponse.data){
            
                console.log("this is the filepath- ",imageResponse.data);
            setSrc1(imageResponse.data);
    
    
            }else{
                alert("failed to save the image in server");
            }
    
        } catch (error) {
            console.log(error);
        }
      };
    






      const handleSubmit=async(e)=>{
        e.preventDefault();
      try{
          if(name==="" || model==="" || category===""){
            // setError("please fill the form properly");
            console.log("please fill the form properly");
    
          }
          else if(name!=="" && model!==""  && category!==""){

            if(src1===""){
                const uploadObj={
                    name,model,src,category,del:src1
                   }
                await UpdateProductIndividual(id,uploadObj);
                    setName("");
              setModel("");
              // setDescription("");
              setSrc("");
            navigate("/allproduct");

                }else if(src1!==""){
                const uploadObj={
                    name,model,src:src1,category,del:src
                   }
                await UpdateProductIndividual(id,uploadObj);

                setName("");
                setModel("");
                // setDescription("");
                setSrc("");
            navigate("/allproduct");


                }



             
    
            //   await addProduct(uploadObj);
          
            //   setError("");
    
    
          }
    
      }
      catch(err){
        // setError(err.response.data.errorMessage);
        console.log(err.response.data.errorMessage);
    
      }
    
    }
    



  return (
      <>

    <section id="editProduct">
   


      <section id="form" className="formedit">
      <div className="backBtn">
          <button  onClick={() => navigate(-1)}><i class="fas fa-long-arrow-alt-left"></i>go Back</button>
      </div>

              <fieldset className="log">
              <h2>EDIT PRODUCT</h2>
              <div className={formBtn}>
                  <button onClick={handleUpdatePhoto}>click to update photo</button>
              </div>
              <div className={inpDiv}>
              <input type="file"   id="video_file" 
            onChange={uploadFileHandler}
            className="custom-file-input" />
              </div>
             
                  <input type="text" placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder="Enter Model Number"   value={model} onChange={(e)=>setModel(e.target.value)} />
          

                <select name="category" id="category" value={category}  onChange={(e)=>setCategory(e.target.value)} >
                <option value="" selected class="nonselect"  disabled>Select Category</option>
                  <option value="Neckwear">Neckwear</option>
                  <option value="Bracelate">Bracelate</option>
                  <option value="Rings">Rings</option>
                  <option value="Anklets">Anklets</option>
                  <option value="Bangles">Bangles</option>
                  <option value="Danglers">Danglers</option>
                  <option value="Watches">Watches</option>
                  <option value="Headbands">Headbands</option>
                  <option value="Earrings">Earrings</option>

                  
                </select>
                {/* <textarea name="description" id="" cols="30" rows="10" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea> */}

                {/* <div className="error_container">{error}</div> */}

                <button onClick={handleSubmit} >UPDATE</button>
              </fieldset>
          </section>


    </section>

      </>
  )
};

export default Editproduct;
