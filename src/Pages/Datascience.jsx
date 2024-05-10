import React from 'react';
import Card from '../Components/Card';

const Datascience = ({data}) =>{
    const Datasciencedata = data.filter((ele) => ele.head === "Data science");
    return (
        <div>
            <h1>Datascience</h1>
            {Datasciencedata.map((element, index) => {

                return (
                    <Card element={element} index={index} />



                );
            })}

        </div>
    );
}

export default Datascience;