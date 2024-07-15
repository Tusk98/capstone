import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [searchId, setSearchId] = useState([]);
    const [searchedEmployee, setSearchedEmployee] = useState([]);
    let url = "http://localhost:3000";

  const handleSearch = async (event) => {
    event.preventDefault();

    let searchedEmployee = await fetchEmployee(searchId); 
    setSearchedEmployee(searchedEmployee[0]);
    console.log("End of handleSearch: ", searchedEmployee);
  };

  const fetchEmployee = async (searchId) => {
    const result = await fetch(`${url}/employees/${searchId}`);
    console.log(`fetchEmployee ${searchId}`);
    return result.json();
  };


    return (
        <div className="container">
            <form onSubmit={handleSearch} className="mt-5">
                <div className="form-group">
                    <label htmlFor="empId">Employee ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="searchId"
                        placeholder="Enter Employee ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary"> Search Employee by ID </button>
            </form>
            {searchedEmployee !== null && (
                <div className="mt-3">
                    <h3>Employee Details</h3>
                    <p><strong>Name:</strong> {searchedEmployee.Name}</p>
                    <p><strong>Employee ID:</strong> {searchedEmployee.Employee_id}</p>
                    <p><strong>Job Role:</strong> {searchedEmployee.Job_role}</p>
                    <p><strong>Work Location:</strong> {searchedEmployee.Work_location}</p>
                    <p><strong>Salary:</strong> ${searchedEmployee.Salary}</p>
                </div>
            )}
        </div>
    );
}

export default Search;
