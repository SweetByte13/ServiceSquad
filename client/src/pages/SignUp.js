import React from "react";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";

function SignUp({user, setUser}) {
    return (
    <div>
        <NavBar user={user} setUser={setUser} />
        <main>
       <h1 className="signup-header">Welcome to ServiceSquad!</h1>
       <h4 className="signup-sub-header">Use the form below to sign up.</h4>
       <SignUpForm setUser={setUser} />
       </main>
       <SignUpForm />
    </div>
    )
}

export default SignUp;