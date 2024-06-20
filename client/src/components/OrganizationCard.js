import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OrganizationCard({org}) {
  const {name, website, category, opportunities} = org
    
  function handleLearnMoreButton() {
    // write function
}

    return (
      <Card className="org-card"> 
        <Card.Header className="card-header" as="h5">{name}</Card.Header>
        <div className="orgcard-text">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>{opportunities}</Card.Text>
          <Card.Text>{website}</Card.Text> */}
          <Card.Text className="org-website">{website}</Card.Text>
          <Card.Text className="org-category">Type: {category}</Card.Text>
          <Card.Text className="org-opportunities">{opportunities}</Card.Text>
          <div className="buttons">
          <Button className="learnMore-button" onClick={() => handleLearnMoreButton()}>Learn More</Button>
          </div>
        </Card.Body>
        </div>
      </Card>
    )
}

export default OrganizationCard;

