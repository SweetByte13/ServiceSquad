import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import OrganizationContainer from "../components/OrganizationContainer";


function Organizations({ user, setUser}) {
  const [searchOrg, setSearchOrg] = useState("")
  const [orgs, setOrgs] = useState([])

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

  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <main>
      <h1 className="opp-org-header">Organizations</h1>
        <Search setSearchOrg={setSearchOrg} searchOrg={searchOrg}/>
        <OrganizationContainer orgs={orgs} setOrgs={setOrgs}/>
    </main>
    </>
  );
}

export default Organizations;