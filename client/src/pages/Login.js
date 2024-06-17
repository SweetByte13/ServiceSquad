import React, {useState} from "react";
import LogInForm from "../components/LoginForm";


function Login({onLogin}) {
const [showLogin, setShowLogin] = useState(true);

    //return (
        // <Wrapper>
        //     <Logo>ServiceSquad</Logo>
        //     { showLogin ? (
        //     <>
        //         <LogInForm onLogin={onLogin} />
        //             <Divider />
        //                 <p>
        //                     Don't have an account? &nbsp;
        //                     <Button onClick={() => setShowLogin(false)}>
        //                         Sign Up
        //                     </Button>
        //                 </p>
        //     </>
        //     ):(
        //     <>
        //         <SignUpForm onLogin={onLogin} />
        //             <Divider/>
        //                 <p>
        //                     Already have an account? &nbsp;
        //                     <Button onClick={() => setShowLogin(true)}>
        //                         Log In
        //                     </Button>
        //                 </p>
        //     </>
        //     )}
        // </Wrapper>
    //)
}

export default Login;