import React from 'react';
import Card from '../Components/Card';

const Career = ({data}) => {
    const Careerdata=data.filter((ele)=>ele.head==="Career")
    return (
        <div>
            <h1>Career</h1>
            {Careerdata.map((element,index)=>{

            return(

                <Card element={element}index={index}/>
            )

            })}
        </div>
    );
};

export default Career;