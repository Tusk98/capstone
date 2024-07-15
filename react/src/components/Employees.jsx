import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NavBar from "./NavBar";


function Employees() {
    let [employeeList, setEmployeeList] = useState([]);
    let navigate = useNavigate();
    const location = useLocation();
    let userId = location.state.id;

    let data_url = "http://localhost:3000/employees";

    const fetchEmployees = () => {
        fetch(data_url)
        .then((res) => res.json())
        .then((employeeList) => {
            setEmployeeList(employeeList);
        });
    };

    useEffect(fetchEmployees, []);

  function handleClick(id) {
    navigate(`/employees/${id}`, {state:{id:userId}});
  }

  return (
    <section id="employeeList">
        <NavBar></NavBar>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {employeeList.map((employee) => (
          <Card key={employee._id} variant="outlined">
            <div key={employee._id} onClick={() => handleClick(employee.Employee_id)}>{employee.Name}
            </div>
            </Card>
        ))}
        </div>
      </section>
  );
}
export default Employees;