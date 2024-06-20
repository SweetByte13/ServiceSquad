import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OrganizationCard({org}) {

  const {name, website, category, opportunities} = org
    
    return (
      <Card className="org-card"> 
        <Card.Header className="card-header" as="h5">{name}</Card.Header>
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>{opportunities}</Card.Text>
          <Card.Text>{website}</Card.Text>
          <div className="buttons">
          {/* <Button className="apply-button" onClick={() => handleApplyButton()}>Apply</Button> */}
          </div>
        </Card.Body>
      </Card>
    )
}

export default OrganizationCard;