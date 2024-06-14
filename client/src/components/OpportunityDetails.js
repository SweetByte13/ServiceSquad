import React from "react";
import OpportunityCard from "./OpportunityCard.js";

function OpportunityDetails() {
    return (
    <div>
        <h1>This is a Opportunity Details component. 
            Here we'll have the fetch for the data for the individual opportunity. 
            Then send props to the card.
        </h1>
        <OpportunityCard />
    </div>
    )
}

export default OpportunityDetails;