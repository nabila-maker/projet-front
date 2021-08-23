import React,{useEffect,useState} from 'react';
import Navigation from '../components/Navigation';
import ValideChallengeCard from '../components/ValideChallenge';
import ChallengeService from'../services/ChallengeService'



function ValidateChallenge() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const validateChallenge = async() =>{


            try{
                const response = await ChallengeService.validatedChallenge()
            setData(response.data)
            console.log(response.data)
            }
            catch(err){
                console.log(err)

            }
        }
      validateChallenge()
    
    

    },[])

    return (
        <>
        <Navigation/>
        <h2>Challenge validé</h2>

        <div className="accChallenges">
        <ul className="accChallenges-list">
           { Array.isArray(data) && data.map((challenge,index)=>(

             <ValideChallengeCard challenge={challenge.challenge} key={index}  />

            
           ))}; 
    </ul>
       

   </div>

</>

    );
        }


export default ValidateChallenge;