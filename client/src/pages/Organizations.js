import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import OrganizationContainer from "../components/OrganizationContainer";


function Organizations({ user, setUser}) {
  
  const [orgs, setOrgs] = useState([])

  const [searchOrg, setSearchOrg] = useState("")

  useEffect(() => {
    fetch("/organizations")
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            throw Error('Network response was not ok.');
        })
        .then((orgsData) => {
          setOrgs(orgsData)
        });
}, []);

  const searchedOrgs = orgs.filter((org) => {
    return (org.name.toLowerCase().includes(searchOrg.toLowerCase()))
  })

  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <main>
      <h1 className="opp-org-header">Organizations</h1>
        <Search setSearchOrg={setSearchOrg}/>
        <OrganizationContainer orgs={searchedOrgs} />
    </main>
    </>
  );
}

export default Organizations;