import axios from "axios";
import { useEffect, useState } from "react";

export const Heading1 = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        const div = async () => {
        const divya = await axios.get('https://fakestoreapi.com/products')
        setdata(divya.data)
         console.log(divya,'hello');
          };
          div()
    },[])
  
  return (
   <div>
    {
        data.map((nikhil)=>{
            return (
                <h2>{nikhil.price}</h2>
            )
            
          })
    }
   </div>
  );
};
