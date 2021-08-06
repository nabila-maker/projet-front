import React from 'react';

function Card(props){
    const { challenge }=props;
    
    return (
       <li className="card">
        <div className="data-container">
            <ul>
                <li>{challenge.title}</li>
                <li>{challenge.description}</li>
                <li>{challenge.tag}</li>
            </ul>

        </div>

       </li>
    );
};

export default Card;