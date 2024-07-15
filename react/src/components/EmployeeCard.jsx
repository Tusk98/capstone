import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

function EmployeeCard(){

    let [employee, setEmployee] = useState([]);
    let [managed, setManaged] = useState([]);
    let [loggedUser, setLoggedUser] = useState([]);
    const location = useLocation();
    let userId = location.state.id;

    let navigate = useNavigate();
    let params = useParams();
    let url = "http://localhost:3000";

    async function getEmployee() {
      let fetchedEmployee = await fetchEmployee(params.id);
      let loggedEmployee = await fetchEmployee(userId);
      let managedEmp; 
      
      console.log("employee:", fetchedEmployee);
      console.log("logged in as employee:", userId);
      setEmployee(fetchedEmployee[0]);
      setLoggedUser(loggedEmployee[0]);

      if (fetchedEmployee[0].Managed) {
        console.log("MANAGED:", fetchedEmployee[0].Managed);
        const managedEmp = await fetchManaged(fetchedEmployee[0].Managed);
        setManaged(managedEmp[0]);
      } else {
        console.log("Has no managed employees");
      }
    }

    const fetchManaged = async (managedId) => {
      const result = await fetch(`${url}/employees/${managedId}`);
      console.log(`fetchManaged ${managedId}`);
      return result.json();
    };
  
    const fetchEmployee = async (employeeId) => {
      const result = await fetch(`${url}/employees/${employeeId}`);
      console.log(`fetchEmployee ${employeeId}`);
      return result.json();
    };

    useEffect(() => getEmployee, []);

    return (
      <><div>
        <NavBar></NavBar>
        <div>Welcome {loggedUser.Name}! Your role is {loggedUser.Status}</div>
      </div><div className="card card-background" style={{ flex: '1', minWidth: '300px' }}>
          <div className="card-body">
            <h5 className="card-title">Employee Details</h5>
            <div className="card-text">Name: {employee.Name}</div>
            <div className="card-text">Employee ID: {employee.Employee_id}</div>
            <div className="card-text">Phone Number: {employee.Phone_number}</div>
            <div className="card-text">Job Role:: {employee.Job_role}</div>
            <div className="card-text">Work Location: {employee.Work_location}</div>
            <div className="card-text">Salary: 
              {(loggedUser.Status=="HR" || loggedUser.Employee_id == employee.Employee_id
                || (loggedUser.Status=="Manager" && loggedUser.Managed == employee.Employee_id)
              ) ?
              employee.Salary : "You are not authorized to view this salary"}</div>
          </div>

          {/* <div className="card-body">
            <h5 className="card-title">Managed Details</h5>
            <div className="card-text">Name: {managed.Name}</div>
            <div className="card-text">Salary: {managed.Salary}</div>
          </div> */}


        </div></>
    );

}

export default EmployeeCard;