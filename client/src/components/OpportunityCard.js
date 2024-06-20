import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faker } from '@faker-js/faker';
import { useNavigate } from "react-router-dom";

function OpportunityCard({user, opportunity}) {
    const {title, description, remote_or_online, category, dates, duration, organization} = opportunity
    const navigate = useNavigate();

    function handleApplyButton() {
        if( user === null || user === undefined){
          alert ("User must be logged in.")
          return ;
        }
        navigate(`/opportunities/${opportunity.id}`)
    }

    let imageURl = faker.image.avatar()

    return (
      <Card className="opp-card">
        <Card.Header className="card-header" as="h5">{organization.name}</Card.Header>
        <div className="oppcard-text">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="opp-description">{description}</Card.Text>
            <Card.Text className="opp-remote_or_online">Location: {remote_or_online}</Card.Text>
            <Card.Text className="opp-category">Type: {category}</Card.Text>
            <Card.Text className="opp-dates">Date Range: {dates}</Card.Text>
            <Card.Text className="opp-duration">Committment: {duration}</Card.Text>
            <div className="buttons">
              <Button className="apply-button" onClick={() => handleApplyButton()}>Apply</Button>
            </div>
          </Card.Body>
        </div>
        <div className="oppcard-img">
          <img className="card-logo" src={imageURl} alt="Organization"/>
        </div>
      </Card>
    )
}

export default OpportunityCard;