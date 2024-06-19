import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OrganizationCard() {
    
    return (
      <Card className="org-card"> 
        <Card.Header className="card-header" as="h5">Org Name</Card.Header>
        <Card.Body>
          <Card.Title>Location</Card.Title>
          <Card.Text>description</Card.Text>
          <Card.Text>Link here maybe?</Card.Text>
          <div className="buttons">
          {/* <Button className="apply-button" onClick={() => handleApplyButton()}>Apply</Button> */}
          </div>
        </Card.Body>
      </Card>
    )
}

export default OrganizationCard;