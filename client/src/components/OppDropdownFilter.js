import React, { useState } from "react";

function OppDropdownFilter() {

    //const [filter, setFilter] = useState("");

    // function handleChangeFilter(event) {
    //     const value = event.target.value;
    //     setFilter(value);

    //     let filteredOpps;
    //     switch (value) {
    //         case '':
    //             filteredOpps = [...opportunities].sort()
    //             break;
            
    //             default:
    //                 filteredOpps = [...opportunities];
    //     }
    // setOpps(filteredOpps);
    // }

    return (
        <div className="dropdown">
            <label className="filter" htmlFor="filter">Filter: </label>
            <select className="select" name="filter" >
            {/* // value={filter} onChange={handleChangeFilter}> */}
                <option value="">Select</option>
                <option value="">Organization</option>
                <option value="">Category</option>
                <option value="">Activities</option>
                <option value="">Location</option>
            </select>

        </div>
    )
}

export default OppDropdownFilter;