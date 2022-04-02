import React,{useEffect} from 'react'
import Navbar from '../component/navbar';
import Carouse from '../component/carouse';
import Body from "../component/body";


const Homepage = () => {


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])



    return (
        <>
       <Navbar />
       <Carouse />
       <Body />
        <div>

        </div>
        </>
    )
}

export default Homepage;
