import React from "react";
import NavBar from "../components/NavBar"
import ProfileForm from "../components/ProfileForm";

function Profile({ user, setUser }) {
    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main>
            
            <br></br>
                <ProfileForm setUser={setUser} user={user} />
            </main>
        </div>
    )
}

export default Profile;