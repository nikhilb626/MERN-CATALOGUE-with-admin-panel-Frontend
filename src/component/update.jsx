import React,{useState,useContext} from 'react';
import AuthContext from '../context/authcontext';
import bcrypt from "bcryptjs";
import { updateUser } from '../service/adminaxios';
import { logoutUser } from '../service/adminaxios';
import { useNavigate } from 'react-router-dom';


const Update = () => {

  const navigate=useNavigate();


  const {adminEmail,adminPassword,adminId,getLoggedIn}=useContext(AuthContext);

  const [currpassword,setCurrpassword]=useState("");
  const [newpassword,setNewpassword]=useState("");
  const [cpassword,setCpassword]=useState("");

    const [error,setError]=useState("");


  const handleUpdate=async()=>{
    try{

      if(currpassword==="" || newpassword==="" || cpassword===""){
        // console.log("please fill the form properly");
        setError("please fill the form properly");
      }
      else if(currpassword!=="" && newpassword!=="" && cpassword!==""){
        const passwordCorrect=await bcrypt.compare(currpassword,adminPassword);

        if(passwordCorrect){
          if(newpassword===cpassword){
            const updateObj={
              id:adminId,
              email:adminEmail,password:newpassword
            }


          await updateUser(updateObj);
            



            setCurrpassword("");
            setNewpassword("");
            setCpassword("");

            await logoutUser();
            await getLoggedIn();
            setError("");
            navigate("/log");

          }
          else if(newpassword!==cpassword){
            console.log("password does not match");
            setError("Confirm password does not match")
          }
        }else if(!passwordCorrect){
          console.log("current password is incorrect");
          setError("Old password incorrect")
        }

      }

    }catch(err){
      setError(err.response.data.errorMessage);

    }
  }






  return (
      <>
           <section id="form">
              <fieldset className="log">
              <h2>Update Admin</h2>
              <input type="password" placeholder="Enter Current Password" value={currpassword} onChange={(e)=>setCurrpassword(e.target.value)} />

                  <input type="password" placeholder="Enter New Password" value={newpassword} onChange={(e)=>setNewpassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
              
                <div className="error_container">{error}</div>
              
                <button onClick={handleUpdate}>Update</button>
              </fieldset>
          </section>
      </>
  )
};

export default Update;
