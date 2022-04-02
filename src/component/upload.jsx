import React,{useState} from 'react';
import { addImage } from '../service/productaxios';
import { addProduct } from '../service/productaxios';
import {useNavigate} from "react-router-dom";

const Upload = () => {


  const navigate=useNavigate();

  const [name,setName]=useState("");
  const [model,setModel]=useState("");
  const [category,setCategory]=useState("");
  // const [description,setDescription]=useState("");
  const [src,setSrc]=useState("");

  const [success,setSuccess]=useState("successCont sucess3");


  const [error,setError]=useState("");






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
        setSrc(imageResponse.data);


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
      if(name==="" || model===""  || category===""){
        setError("please fill the form properly");

      }
      else if(name!=="" && model!==""  && category!==""){

          const uploadObj={
           name,model,src,category
          }

          await addProduct(uploadObj);
          setName("");
          setModel("");
          // setDescription("");
          setError("");
          setSuccess("successCont sucess3 show");
          navigate("/allproduct");



      }

  }
  catch(err){
    setError(err.response.data.errorMessage);

  }

}







  return (
      <>
            <section id="form">
            <div className={success}>
   <div>upload Successfully</div>
        <button className="closeBtn" onClick={()=>setSuccess("successCont")} >X</button>
        </div>
              <fieldset className="log">
              <h2>UPLOAD PRODUCT</h2>
              <input type="file"   id="video_file"
            onChange={uploadFileHandler}
            className="custom-file-input" />
                  <input type="text" placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder="Enter Model Number"  value={model} onChange={(e)=>setModel(e.target.value)} />
          

                <select name="category" id="category" value={category}  onChange={(e)=>setCategory(e.target.value)}>
                <option value="" selected class="nonselect" disabled>Select Category</option>
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
                {/* <textarea name="description" id="" cols="30" rows="10" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea> */}

                <div className="error_container">{error}</div>

                <button onClick={handleSubmit}>UPLOAD</button>
              </fieldset>
          </section>
      </>
  )
};

export default Upload;
