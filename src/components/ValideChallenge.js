
function ValideChallengeCard(props){
    const { challenge }=props;
   

  
    
    return (
       <li className="Validcard">
        <div className="data-Validcontainer">
            <ul>
                <li>{challenge.title}</li>
                <li>{challenge.description}</li>
                <li>{challenge.tag}</li>
            </ul>
            
          

        </div>

       </li>
    );
};

export default ValideChallengeCard;