import React from 'react';
import Card from '../Components/Card';

const Fullstack = ({data}) => {
    const Fullstackdata=data.filter((ele)=>ele.head==="Full stack developer")
    return (
        <div>
           <h1>Fullstack</h1>
           {Fullstackdata.map((element,index)=>{
           
         return(
             <Card element={element} index={index}/>



           )
         


           })} 
        </div>
    );
};

export default Fullstack;