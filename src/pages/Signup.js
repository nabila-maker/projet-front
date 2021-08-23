import Footer from '../components/Footer';
import Navigation from '../components/Navigation'


import SignupForm from "../components/Signup";

function Signup() {
    return (
        <>
        <div className ="Signup">
            <Navigation/>
            <h1>Signup</h1>
            <SignupForm/>
        </div>
       
        <Footer/> 
        </>
    )
    }
    
    export default Signup;