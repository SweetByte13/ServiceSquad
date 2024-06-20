import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import OrganizationContainer from "../components/OrganizationContainer";


function Organizations({ user, setUser}) {
  const [searchOrg, setSearchOrg] = useState("")
  const [orgs, setOrgs] = useState([])

  useEffect(() => {
    fetch("http://localhost:5555/organizations")
      .then((resp) => (resp.json()))
      .then((orgs) => setOrgs(orgs))
  }, [])

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