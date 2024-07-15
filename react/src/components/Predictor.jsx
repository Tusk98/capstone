import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Predictor() {
    const [jobRole, setJobRole] = useState('');
    const [workLocation, setWorkLocation] = useState('');
    const [predictedSalary, setPredictedSalary] = useState(null);
    const navigate = useNavigate();

    const handlePredict = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ job_role: jobRole, work_location: workLocation }),
            });

            const data = await response.json();
            setPredictedSalary(data.predicted_salary);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handlePredict} className="mt-5">
                <div className="form-group">
                    <label htmlFor="jobRole">Job Role</label>
                    <input
                        type="text"
                        className="form-control"
                        id="jobRole"
                        placeholder="Enter Job Role"
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="workLocation">Work Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="workLocation"
                        placeholder="Enter Work Location"
                        value={workLocation}
                        onChange={(e) => setWorkLocation(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Salary Predict</button>
            </form>
            {console.log("AAAAA")}
            {predictedSalary !== null && (
                <div className="mt-3">
                    <h3>Predicted Salary: ${predictedSalary.toFixed(2)}</h3>
                </div>
                
            )}
        </div>
    );
}

export default Predictor;
