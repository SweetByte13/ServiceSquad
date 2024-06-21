import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Router, Link } from "react-router-dom";

function OrganizationCard({org}) {
  const {name, website, category, opportunities} = org

  const opps = opportunities.map((opp) => {
    return (<div key={opp.id}>
      <Link  to={`../opportunities/${opp.id}`} >{opp.title}</Link>
    </div>)
  })

    return (
      <Card className="org-card"> 
        <Card.Header className="card-header" as="h5">{name}</Card.Header>
        <div className="orgcard-text">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Opportunities Available:</Card.Text>
          <div className="org-opportunities">{opps}</div>
          <br></br>
          <Card.Text className="org-website">{website}</Card.Text>
          <Card.Text className="org-category">Type: {category}</Card.Text>
          <div className="buttons">
          </div>
        </Card.Body>
        </div>
      </Card>
    )
}

export default OrganizationCard;

