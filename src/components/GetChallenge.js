import React,{useEffect,useState} from 'react';
import api from '../services/Api';
import Card from './Card'

function GetChallenge() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        api.get("/:iduser/challenges")
    
     .then(res=>res.data.json())
      .then(result=>{setData(result.data)})

    },[])

    return (
        <div>

        { <ul className="challenges-list">
        {data.map((challenges)=>(
            <Card challenge={challenges} key={challenges.title}  />
           
        ))}
    
    </ul> }
    </div>
    );
        }

export default GetChallenge;