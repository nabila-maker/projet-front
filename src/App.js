import {useEffect,createContext,useReducer,useContext} from 'react';
import Challenge from "./pages/Challenge";
import {BrowserRouter,Switch,Route,useHistory} from "react-router-dom"
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {reducer,initialState} from './reducers/userReducer'
import AccChallenges from './pages/AccChallenges'
import ValidateChallenge from './pages/ValidateChallenge'

export const UserContext = createContext() //on doit l'utiliser pour lier l'initialstate et le reducer

const Routing = () =>{  //accéder l'historique voir si le user a le token, la data
  const history = useHistory() //j'appel history hook
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = localStorage.getItem("user")

    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }else{
      history.push('/login')
    }

  },[])
  return(
    <Switch>
      
    <Route path="/signup" exact component={Signup}/>
    <Route path="/login" exact component={Login}/>

    <Route  exact path="/" component={Challenge}/>
    <Route exact path="/account"  component={Account}/>
    <Route exact path="/account/Challenges"  component={AccChallenges}/>
    <Route exact path="/account/ChallengesValidated" component={ValidateChallenge}/>
    

    </Switch>
  )
}


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value ={{state,dispatch}}>
    <BrowserRouter>
     <Routing/>
      </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;

