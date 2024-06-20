import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import OpportunitiesContainer from "../components/OpportunitiesContainer";
import OppDropdownFilter from "../components/OppDropdownFilter";

function Opportunities({ user, setUser }) {
    const [opps, setOpps] = useState([])

    useEffect(() => {
        fetch("/opportunities")
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw Error('Network response was not ok.');
            })
            .then((oppsData) => setOpps(oppsData));
    }, []);

    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main>
                <h1 className="opp-org-header">Service Opportunities</h1>
                <OppDropdownFilter />
                <OpportunitiesContainer user={user} setUser={setUser} opps={opps} setOpps={setOpps} />
            </main>
        </div>
    )
}

export default Opportunities;
            
                // useEffect(() => {
                //     setOpps([
                //         {
                //             title:"Example Opportunity",
                //             description:"A Description of the opportunity. May contain HTML",
                //             remote_or_online:false,
                //             category: "Legal",
                //             dates:"September 15, 2024 - September 17, 2024",
                //             duration:"2-4 hours",
                //             organization:
                //                 {
                //                     name:"Example Organization",
                //                 }
                //         },
                //         {
                //             title:"Example Opportunity 2",
                //             description:"A Description of the opportunity. May contain HTML",
                //             remote_or_online:false,
                //             category: "Legal",
                //             dates:"June 28, 2024 - June 29, 2024",
                //             duration:"3 hours",
                //             organization:
                //                 {
                //                     name:"Example Organization2",
                //                 }
                //         }
                //     ])