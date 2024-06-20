import React from "react";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";

function SignUp({user, setUser}) {
    return (
    <div>
        <NavBar user={user} setUser={setUser} />
        <main>
       <SignUpForm setUser={setUser} />
       </main>
    </div>
    )
}

export default SignUp;