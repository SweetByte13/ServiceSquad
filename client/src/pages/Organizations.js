import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import OrganizationContainer from "../components/OrganizationContainer";


function Organizations({ user, setUser}) {
  const [searchOrg, setSearchOrg] = useState("")
  const [orgs, setOrgs] = useState([])

  useEffect(() => {
    fetch("/organizations")
      .then((resp) => (resp.json()))
      .then((orgs) => setOrgs(orgs))
  }, [])

//   useEffect(() => {
//     setOrgs([
//         {
//             name:"Example Organization",
//             website:"Will contain HTML",
//             category: "Legal",
//             opportunities:"Proof reader needed",
//         },
//         {
//             name:"Example Organization 2",
//             website:"Will contain HTML",
//             category: "Food",
//             opportunities:"Packing food pantry boxes",
//         }
//     ])
// })

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