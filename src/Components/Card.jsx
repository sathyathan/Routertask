import React from 'react';

const Card = ({element,index}) => {
    return (
        <div>
            <div key={element.id}>
                    <img src={element.image}/>
                    <h2>{element.head}</h2>
                    <h4>{element.content}</h4>
                    <h5>{element.date}</h5>
               </div> 
        </div>
    );
};

export default Card;