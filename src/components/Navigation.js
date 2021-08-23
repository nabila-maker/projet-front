import { NavLink,Link,useHistory } from "react-router-dom";
import {useContext,} from 'react';
import {UserContext} from '../App'
import logo from  "../assets/img/logo.png";


function Navigation() {
    const {state,dispatch} = useContext(UserContext)
     const history = useHistory()
    const renderList =()=>{
        if(state){
            return[
                <NavLink exact to="/" activeClassName="nav-active">
                Challenges
            </NavLink>,
                <NavLink exact to="/Account" activeClassName="nav-active">
                Account
             </NavLink>, 
               <button exact to="/Logout" activeClassName="nav-active" onClick = {()=>{
                   localStorage.clear()
                   dispatch({type:"CLEAR"})
                   history.push('/login')
                   
               }}>
               Logout
            </button> 
             
            ]
        }else{
            return [
                <NavLink exact to="/signup" activeClassName="nav-active">
                signup
             </NavLink>,
             <NavLink exact to="/login" activeClassName="nav-active">
                login
             </NavLink>
                
            ]
        }
    }
    return(
        <>
<div className="logo">
     
<Link to = {state?"/":"/login"}>

 <img src={logo} alt="logo"/>
 <h1>First Leaf</h1>

</Link>
     </div>
     

        <div className="navigation">
            {renderList()}
        </div>


     </>
      
    )
}

export default Navigation;
