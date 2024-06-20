import React from "react";
import Stack from 'react-bootstrap/Stack';
import OrganizationCard from "../components/OrganizationCard";
// import Col from 'react-bootstrap/Col';

function OrganizationContainer({user, orgs}) {

    const organizationCards = orgs.map((org) => {
        return (
            <OrganizationCard
                key={org.id}
                name={org.name}
                website={org.website}
                category={org.category}
            />
        )})
            // <Col key={org.idx}>
            //     <OrganizationCard key={org.id} org={org} />
            // </Col>
        
        return (
            <div>
                <Stack className="opp-stack" gap={4}>
                    {/* {organizationCards} */}
               </Stack>
            </div>
        )
    }

export default OrganizationContainer;

