import React,{useState,useEffect,createContext} from "react";
import { loggedInUser } from "../service/adminaxios";







const AuthContext=createContext();

const AuthContextProvider=(props)=>{


    const [cart,setCart]=useState(() => {
        const stickyValue = window.localStorage.getItem("carty");
        return stickyValue !== null
          ? JSON.parse(stickyValue):[];
      });


      const [cartCount,setCartCount]=useState(cart.length);







    const [loggedIn,setLoggedIn]=useState(() => {
        const stickyValue = window.localStorage.getItem("loggedInValue");
        return stickyValue !== null
          ? JSON.parse(stickyValue)
          :false;
      });






      const [adminEmail,setAdminemail]=useState(() => {
        const stickyValue = window.localStorage.getItem("adminEmailValue");
        return stickyValue !== null
          ? JSON.parse(stickyValue)
          : "";
      }
      );

      const [adminPassword,setAdminpassword]=useState(() => {
        const stickyValue = window.localStorage.getItem("adminPasswordValue");
        return stickyValue !== null
          ? JSON.parse(stickyValue)
          : "";
      });

      const [adminId,setAdminid]=useState(() => {
        const stickyValue = window.localStorage.getItem("adminIdValue");
        return stickyValue !== null
          ? JSON.parse(stickyValue)
          : "";
      });



    const getLoggedIn=async()=>{
        const loggedInRes=await loggedInUser();
        console.log("logged in admin is- ",loggedInRes.data);

        setLoggedIn(loggedInRes.data);
        
    }






    const getadminemail=async(data)=>{

        setAdminemail(data);

    }


    const getadminpassword=async(data)=>{
          setAdminpassword(data);


    }




    const getadminid=async(data)=>{
            setAdminid(data);

    }


    const addCart=async(item)=>{


            let obj = cart.find(o => o._id === item._id);

            if(obj===undefined){
                const newItem=cart.concat(item);
              setCart(newItem);
          setCartCount(newItem.length);


            }else if(obj!==undefined){

                alert("This Product Already Exists in Your Cart");
            }


            
            
       
         

    }


    const removeItem=async(id)=>{
        const newItems = cart.filter((item) => item._id !== id);
    setCart(newItems);
    setCartCount(newItems.length);

        
    }


    const removeAll=async()=>{
        setCart([]);
      setCartCount(0);

    }




  




    useEffect(()=>{
        getLoggedIn();
        localStorage.setItem("loggedInValue",JSON.stringify(loggedIn));
        localStorage.setItem("adminEmailValue",JSON.stringify(adminEmail));
        localStorage.setItem("adminPasswordValue",JSON.stringify(adminPassword));
        localStorage.setItem("adminIdValue",JSON.stringify(adminId));

        localStorage.setItem("carty",JSON.stringify(cart));

        
    })




    return(
        <AuthContext.Provider value={{loggedIn,adminEmail,adminPassword,adminId,addCart,getLoggedIn,removeAll,removeItem,getadminemail,getadminid,getadminpassword,cart,cartCount}}>
            {props.children}
        </AuthContext.Provider>
    )
} 



export default AuthContext;
export {AuthContextProvider};