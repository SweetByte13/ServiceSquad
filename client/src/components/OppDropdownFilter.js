import { setNestedObjectValues } from "formik";
import React, { useState } from "react";

function OppDropdownFilter({ setOpps, opps}) {
    const [sort, setSort] = useState("");

    function handleChangeFilter(event) {
        const value = event.target.value;  
        setSort(value);
        let sortedOpps = []

        switch (value) {
            case 'Organization':
                sortedOpps = [...opps].sort((a, b) => a.organization.name.localeCompare(b.organization.name));
                break;
            case 'Category':
                sortedOpps = [...opps].sort((a, b) =>  a.category.localeCompare(b.category));
                break;
            case 'Date Range':
                sortedOpps = [...opps].sort((a, b) => new Date(a.dates) - new Date(b.dates));
                break;
            default:
                sortedOpps = [...opps];
        }
        setOpps(sortedOpps)
    }

    return (
        <div className="dropdown">
            <label className="filter" htmlFor="filter">Sort: </label>
            <select className= "select" name="filter" onChange={handleChangeFilter}>
                <option value="">Select</option>
                <option value="Organization">Organization</option>
                <option value="Category">Category</option>
                <option value="Date Range">Date Range</option>
            </select>
        </div>
    )
}
export default OppDropdownFilter;