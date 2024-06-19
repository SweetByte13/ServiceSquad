import React from "react";

function Search({setSearchOrg}) {
    return (
        <div className="searchbar">
            {/* <h1>search</h1> */}
            <label className="searchlabel" htmlFor="search">Search by Organization:</label>
            
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={(e) => setSearchOrg(e.target.value)}/>
        </div>
    )
}

export default Search;