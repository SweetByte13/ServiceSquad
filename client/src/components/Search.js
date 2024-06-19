import React from "react";

function Search({setSearchOrg, searchOrg}) {
    return (
        <div className="searchbar">
            {/* <h1>search</h1> */}
            <label className="searchlabel" htmlFor="search">Search by Organization:</label>
            
            <input 
                className="searchinput"
                type="text"
                id="search"
                placeholder="Type a name to search... "
                value={searchOrg}
                onChange={(e) => setSearchOrg(e.target.value)}/>
        </div>
    )
}

export default Search;