import React from 'react';
import Card from '../Components/Card';

const Cybersecurity = ({data}) => {
    const Cybersecuritydata=data.filter((ele)=>ele.head==="Cyber security")
    return (
        <div>
            <h1>Cybersecurity</h1>
            {Cybersecuritydata.map((element,index)=>{

                return(

                    <Card element={element} index={index} />
                )
            })}
        </div>
    );
};

export default Cybersecurity;