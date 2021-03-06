import React, {useState,useEffect} from "react";
import Card from"./Card";
import api from '../services/Api';
 

function Challenges(props) {

const [data,setData] = useState([]); //data: stock tout nos appel a la donnée on attant un tableau
  
   useEffect(()=>{
      api.get("/challenges")
   .then((res)=> setData(res.data));


   },[]);

   
   
   

    return (

         <div className="challenges">
           { <ul className="challenges-list">
                {data.map((challenge)=>(
                    <Card challenge={challenge} key={challenge.title}  />
                   
                ))}
            
            </ul> }
            
           
         </div>
    );

};

export default Challenges;
