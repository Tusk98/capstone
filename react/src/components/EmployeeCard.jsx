import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EmployeeCard(){

    let [employee, setEmployee] = useState([]);

    let navigate = useNavigate();
    let params = useParams();
    let url = "http://localhost:3000";

    async function getEmployee() {
      let fetchedEmployee = await fetchEmployee(params.id);
      
      console.log("employee:", fetchedEmployee);
      setEmployee(fetchedEmployee[0]);
    }
  
    async function fetchEmployee() {
      let result = await fetch(`${url}/employees/${params.id}`);
      return result.json();
    }

    useEffect(() => getEmployee, []);

    return (
        <div className="card card-background" style={{ flex: '1', minWidth: '300px' }}>
            <div className="card-body">
                <h5 className="card-title">Employee Details</h5>
                <div className="card-text">Name: {employee.Name}</div>
                <div className="card-text">Employee ID: {employee.Employee_id}</div>
                <div className="card-text">Phone Number: {employee.Phone_number}</div>
                <div className="card-text">Job Role:: {employee.Job_role}</div>
                <div className="card-text">Work Location: {employee.Work_location}</div>
                <div className="card-text">Salary: {employee.Salary}</div>
            </div>
            
            
        </div>
    );

}

export default EmployeeCard;