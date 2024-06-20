import React from "react";
import NavBar from "../components/NavBar"
import ProfileForm from "../components/ProfileForm";

function Profile({ user, setUser }) {
    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main>
            
            <br></br>
                <p>This is the Profile.</p>
                <ProfileForm setUser={setUser} />
            </main>
        </div>
    )
}

export default Profile;