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
                <OppDropdownFilter setOpps={setOpps} opps={opps} />
                <OpportunitiesContainer user={user} setUser={setUser} opps={opps} setOpps={setOpps} />
            </main>
        </div>
    )
}
export default Opportunities;