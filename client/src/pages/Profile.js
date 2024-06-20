import React from "react";
import NavBar from "../components/NavBar"
import ProfileForm from "../components/ProfileForm";

function Profile({ setUser }) {
    return (
        <div>
            <NavBar />
            <ProfileForm setUser={setUser} />
            <br></br>
            <body>
                <p>This is the Profile.</p>
            </body>
        </div>
    )
}

export default Profile;