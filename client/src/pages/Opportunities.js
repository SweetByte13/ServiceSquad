import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import OpportunitiesContainer from "../components/OpportunitiesContainer";
import OppDropdownFilter from "../components/OppDropdownFilter";
import Footer from "../components/Footer";

function Opportunities({ user, setUser }) {
    const [opps, setOpps] = useState([])

    useEffect(() => {
        setOpps([
            {
                title:"Example Opportunity",
                description:"A Description of the opportunity. May contain HTML",
                remote_or_online:false,
                category: "Legal",
                dates:"September 15, 2024 - September 17, 2024",
                duration:"2-4 hours",
                organization:
                    {
                        name:"Example Organization",
                    }
            },
            {
                title:"Example Opportunity 2",
                description:"A Description of the opportunity. May contain HTML",
                remote_or_online:false,
                category: "Legal",
                dates:"June 28, 2024 - June 29, 2024",
                duration:"3 hours",
                organization:
                    {
                        name:"Example Organization2",
                    }
            }
        ])
    //     fetch("http://localhost:5555/oppurtunities")
    //         .then((resp) => (resp.json()))
    //         .then((opps) => setOpps(opps))
    }, [])

    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main>
                <h1 className="opp-org-header">Service Opportunities</h1>
                <OppDropdownFilter />
                <OpportunitiesContainer user={user} opps={opps} />
            </main>
            <Footer />
        </div>
    )
}

export default Opportunities;