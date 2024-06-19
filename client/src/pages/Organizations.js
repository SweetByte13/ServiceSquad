import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import OrganizationContainer from "../components/OrganizationContainer";

// after the filter is working, remove script-sever from package.json
//delete db.json file
//reinstall
//adjust fetch url

function Organizations() {

  const [searchOrg, setSearchOrg] = useState("")

  // useEffect(() => {
  //   fetch("http://localhost:5555/organizations")
  //     .then((resp) => (resp.json()))
  //     .then((orgs) => setSearchOrg(orgs))
  // }, [])

  return (
    <>
    <NavBar />
    <main>
      <h1 className="opp-org-header">Organizations</h1>
        <Search setSearchOrg={setSearchOrg}/>
        <OrganizationContainer />
    </main>
    </>
  );
}

export default Organizations;