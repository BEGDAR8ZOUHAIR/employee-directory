// src/components/EmployeeModal.js
import React from 'react';

const EmployeeModal = ({ employee, onClose }) =>
{
    return (
        <div className="modal" style={{ display: employee ? 'block' : 'none' }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Employee Details</h2>
                <p>Name: {employee.name}</p>
                <p>Job Title: {employee.jobTitle}</p>
                <p>Department: {employee.department}</p>
                <p>Email: {employee.email}</p>
            </div>
        </div>
    );
};

export default EmployeeModal;
