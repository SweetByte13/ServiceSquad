import React from "react";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";

function SignUp({user, setUser}) {
    return (
    <div>
       {/* <NavBar /> */}
       <SignUpForm setUser={setUser} />
    </div>
    )
}

export default SignUp;