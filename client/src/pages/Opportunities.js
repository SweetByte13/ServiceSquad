import React from "react";
import NavBar from "../components/NavBar";
import OpportunitiesContainer from "../components/OpportunitiesContainer";

function Opportunities({user, opps}) {
    return (
        <div>
            <NavBar />
            <OpportunitiesContainer user={user} opps={opps}/>
        </div>
    )
}

export default Opportunities;