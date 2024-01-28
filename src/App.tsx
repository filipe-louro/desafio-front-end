import React, { useState, useEffect } from 'react';
import EmployeeTable from './components/DataTable';
import Header from './components/Header';
import { Employee } from './interfaces/employee';
import { AppContainer } from './styles/root-style';

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(employees);

  useEffect(() => {
    fetch('http://localhost:3001/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
        setFilteredEmployees(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (query: string) => {
    const filteredData = employees.filter((employee) =>
      Object.values(employee).some((value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(query.toLowerCase())
      )
    );

    console.log(Object.values(employees), filteredData)

    setFilteredEmployees(filteredData);
  };

  return (
    <AppContainer>
      <Header />
      <EmployeeTable employees={filteredEmployees} onSearchChange={handleSearch} />
    </AppContainer>
  );
};

export default App;
