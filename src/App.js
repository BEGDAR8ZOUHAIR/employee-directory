// src/App.js
import React, { useState } from 'react';
import './styles.css';
import EmployeeTable from './components/EmployeeTable';
import EmployeeModal from './components/EmployeeModal';
import SearchBar from './components/SearchBar';
import employeesData from './employees.json';

function App()
{
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeClick = (employee) =>
  {
    setSelectedEmployee(employee);
  };

  const handleSearch = (searchTerm) =>
  {
    const filteredEmployees = employeesData.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setEmployees(filteredEmployees);
  };

  const closeModal = () =>
  {
    setSelectedEmployee(null);
  };

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <SearchBar onSearch={handleSearch} />
      <EmployeeTable employees={employees} onEmployeeClick={handleEmployeeClick} />
      {selectedEmployee && <EmployeeModal employee={selectedEmployee} onClose={closeModal} />}
    </div>
  );
}

export default App;
