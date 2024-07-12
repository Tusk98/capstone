import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Employees() {
    let [employeeList, setEmployeeList] = useState([]);
    //let navigate = useNavigate();

    let data_url = "http://localhost:3000/employees";

    const fetchEmployees = () => {
        fetch(data_url)
        .then((res) => res.json())
        .then((employeeList) => {
            setEmployeeList(employeeList);
        });
    };

    useEffect(fetchEmployees, []);

//   function handleClick(id) {
//     navigate(`/characters/${id}`);
//   }

  return (
    <>
      <section id="employeeList">
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {employeeList.map((employee) => (
          <Card key={employee._id} variant="outlined">
            <div key={employee._id}>{employee.Name}</div>
            </Card>
        ))}
        </div>
      </section>
    </>
  );
}
export default Employees;