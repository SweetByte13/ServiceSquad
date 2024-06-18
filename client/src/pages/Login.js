import React, {useState} from "react";
import LogInForm from "../components/LoginForm";
import Button from "react-bootstrap/Button"
import NavBar from "react-bootstrap/NavBar"
import SignUpForm from "../components/SignUpForm"


function Login({onLogin}) {
const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <NavBar.Brand>ServiceSquad</NavBar.Brand>
            { showLogin ? (
            <>
                <LogInForm onLogin={onLogin} />
                    <br></br> 
                        <p>
                            Don't have an account? &nbsp;
                            <Button onClick={() => setShowLogin(false)}>
                                Sign Up
                            </Button>
                        </p>
            </>
            ):(
            <>
                <SignUpForm onLogin={onLogin} />
                    <br></br>
                        <p>
                            Already have an account? &nbsp;
                            <Button onClick={() => setShowLogin(true)}>
                                Log In
                            </Button>
                        </p>
            </>
            )}
        </div>
    )
}

export default Login;