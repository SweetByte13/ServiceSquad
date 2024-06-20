import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Router, Link } from "react-router-dom";

function OrganizationCard({org}) {

  const {name, website, category, opportunities} = org

  const opps = opportunities.map((opp) => {
    return (<div>
      <Link to={`../opportunities/${opp.id}`} >{opp.title}</Link>
    </div>)
  })
  console.log(opps)
    
    return (
      <Card className="org-card"> 
        <Card.Header className="card-header" as="h5">{name}</Card.Header>
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>Opportunities Available:</Card.Text>
          <div>{opps}</div>
          <br></br>
          <Card.Text>{website}</Card.Text>
          <div className="buttons">
          </div>
        </Card.Body>
      </Card>
    )
}

export default OrganizationCard;