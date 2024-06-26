import React from "react";
import Stack from 'react-bootstrap/Stack';
import OrganizationCard from "../components/OrganizationCard";
// import Col from 'react-bootstrap/Col';

function OrganizationContainer({user, orgs}) {

    const organization = orgs.map((org) => {
        return (
            <OrganizationCard key={org.id} org={org}/>
              );
            }
        )

        return (
            <div>
                <Stack className="opp-stack" gap={4}>
                    {organization}
               </Stack>
            </div>
        )
    }

export default OrganizationContainer;

