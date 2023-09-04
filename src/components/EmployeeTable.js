import React from 'react';

const EmployeeTable = ({ employees, onEmployeeClick }) =>
{
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job Title</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.jobTitle}</td>
                        <td>{employee.department}</td>
                        <td>
                            <button onClick={() => onEmployeeClick(employee)}>View Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
