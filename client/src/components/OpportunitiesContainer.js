import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OpportunityCard from "../components/OpportunityCard";


function OpportunitiesContainer({user, opps}) {

    const opportunity = opps.map((opportunity) => {
        return (
            <Col key={opportunity.idx}>
                <OpportunityCard key={opportunity.id} opportunity={opportunity}/>
            </Col>
        )
    })

    return (
    <div className="opps-container">
        <Row className="opp-row">
            {opportunity}
        </Row>
    </div>
    )
}

export default OpportunitiesContainer;