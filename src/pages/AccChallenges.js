import React,{useEffect,useState} from 'react';
import ChallengeService from '../services/ChallengeService';
import AccCard from '../components/AccCard'
import Navigation from '../components/Navigation'




function AccChallenges(props) {
    const [data,setData] = useState([]);
    useEffect(()=>{
        ChallengeService.getChallenge()
    
     .then(res=>res.data)
     .then(result=>setData(result))

    },[])

    

    return (
      <>
      
     
        <h2> Challenges </h2>
        <div className="accChallenges">
        <ul className="accChallenges-list">
           { Array.isArray(data) && data.map((challenge,index)=>(

             <AccCard challenge={challenge} key={index}  />

            
           ))}; 
    </ul>
        

   </div>

     

   </>

    );
        }


export default AccChallenges;