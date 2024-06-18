import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OpportunityCard({opportunity}) {
    const {title, description, remote_or_online, category, dates, duration, organization_id} = opportunity
    
    function handleApplyButton() {
        // write function
    }

    return (
        <Card style={{ width: '18rem' }} className="opp-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="opp-description">{description}</Card.Text>
          <Card.Text className="opp-remote_or_online">{remote_or_online}</Card.Text>
          <Card.Text className="opp-category">{category}</Card.Text>
          <Card.Text className="opp-dates">{dates}</Card.Text>
          <Card.Text className="opp-duration">{duration}</Card.Text>
          <Card.Text className="opp-organization_id">{organization_id.name}</Card.Text>
          <div className="buttons">
          <Button className="apply-button" onClick={() => handleApplyButton()}>Apply</Button>
          </div>
        </Card.Body>
      </Card>
    )
}

export default OpportunityCard;