import React from "react";
import Stack from 'react-bootstrap/Stack';
import OrganizationCard from "../components/OrganizationCard";


function OrganizationContainer() {

        return (
            <div>
                <Stack className="opp-stack" gap={4}>
                    <OrganizationCard />
               </Stack>
            </div>
        )
    }
export default OrganizationContainer;