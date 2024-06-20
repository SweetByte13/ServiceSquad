import React from "react";
import Stack from 'react-bootstrap/Stack';
import OrganizationCard from "../components/OrganizationCard";
import Col from 'react-bootstrap/Col';

function OrganizationContainer({user, orgs}) {

    const organization = orgs.map((org) => {
        return (
            <Col key={org.idx}>
                <OrganizationCard key={org.id} org={org} />
            </Col>
        )
    })

        // return (
        //     <div key={org.idx}>
        //         <OrganizationCard key={org.id} org={org}/>
        //     </div>
        //     );
        //     }
        // )

        return (
            <div>
                <Stack className="org-stack" gap={4}>
                    {/* {organization} */}
               </Stack>
            </div>
        )
    }
export default OrganizationContainer;

