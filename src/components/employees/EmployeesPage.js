import React, { useState, useEffect } from "react";
import { fetchAllEmployees } from "./EmployeeService";
import constants from "../../utils/constants";
import { EmployeeCard } from "./EmployeeCard";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const EmployeesPage = () => {
    let [employees, setEmployees] = useState([]);
    let [apiError, setApiError] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        fetchAllEmployees(setEmployees, setApiError);
        console.log(employees);
    }, [employees]);

    return (
    <div>
        {apiError && (
                <p>
                    {constants.API_ERROR}
                </p>
            )}
        <h1>Team Members</h1>
        <div>
            {employees.map((employee) => (
                <div key={employee.id} className="">
                    <EmployeeCard employee={employee} />
                </div>
            ))}
        </div>
        <div>
            <Button className="btn btn-info" style={{marginLeft: '10px'}}
            onClick={() => navigate('/employees/createEmployee')}> New Employee</Button>
        </div>
    </div>
    )
};