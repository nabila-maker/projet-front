import { NavLink } from "react-router-dom";

function NavAccount() {
    return(
        <div className="nav">
            <NavLink exact to="/SelectChallenge" activeClassName="nav-active">
               your challenges
            </NavLink>
            <NavLink exact to="/ValidatedChallenge" activeClassName="nav-active">
               validated challenges
            </NavLink>
           
        </div>
      
    )
}

export default NavAccount;
