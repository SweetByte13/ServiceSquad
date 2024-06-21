import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import OpportunityCard from "../components/OpportunityCard";
import {useParams} from "react-router-dom"

function Opportunity({ user, setUser }) {
    let { id } = useParams();
    const [opp, setOpp] = useState(null)

    useEffect(() => {
        fetch(`/opportunities/${id}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw Error('Network response was not ok.');
            })
            .then((oppsData) => setOpp(oppsData));
    }, []);

    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main>
                <h1 className="opp-org-header">Service Opportunity</h1>
                <div>
                {opp === null || opp === undefined ? "Loading..." : <OpportunityCard key={opp.id} opportunity={opp} user={user}/>}
                </div>
            </main>
        </div>
    )
}

export default Opportunity;