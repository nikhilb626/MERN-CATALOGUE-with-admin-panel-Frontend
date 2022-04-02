import React,{useState,useEffect,useContext} from 'react';
import {loginUser} from "../service/adminaxios";
import {useNavigate} from "react-router-dom";
import AuthContext from '../context/authcontext';
// import Cookies from 'universal-cookie';



const Log = () => {


    const {getLoggedIn,getadminemail,getadminpassword,getadminid}=useContext(AuthContext);

        const navigate=useNavigate();

        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");


    const [error,setError]=useState("");



        const handleLogin=async(e)=>{
            e.preventDefault();
            try{
                if(email==="" || password===""){
                    setError("please fill the form properly");
                    // console.log("please fill the form properly")
                }
                else if(email!=="" && password!==""){
                    const logObj={
                        email,password
                    }
    
                    const userDetail=await loginUser(logObj);

                    // console.log("this is user detail ",userDetail)

                    // const cookies = new Cookies();
                    // domain:'.worldofwhimsicaljewelz.com',sameSite:'none',secure:true

                    // cookies.set('token', userDetail.data.token,{ path: '/' ,httpOnly:true});

                    getadminemail(userDetail.data.email);
                    getadminpassword(userDetail.data.password);
                    getadminid(userDetail.data._id);
                    // console.log("this is id ",userDetail.data._id)
                    setEmail("");
                    setPassword("");
                    setError("");
                    navigate("/");
                    
                    await getLoggedIn();
    
    
    

    
                }
    
            }
            catch(err){
                // console.log(err.response.data.errorMessage);
                setError(err.response.data.errorMessage);
            }

        }




    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


  return (
      <>
          <section id="form">
              <fieldset className="log">
              <h2>ADMIN PANEL</h2>
                  <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <div className="error_container">{error}</div>

                <button onClick={handleLogin}>LOG IN</button>
              </fieldset>
          </section>
      </>
  )
};

export default Log;
