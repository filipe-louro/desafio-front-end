import React from 'react';
import * as DataTableStyles from '../styles/data-table-styles'
import ActionSection from './ActionSection';
import TableRow from './datatable/TableRow';
import TableHeader from './datatable/TableHeader';
import { Employee } from '../interfaces/employee';


interface DataTableProps {
  employees: Employee[];
  onSearchChange: (query: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ employees, onSearchChange }) => {

  return (
    <DataTableStyles.Container>
      <ActionSection title="Funcionários" onSearchChange={onSearchChange} />
      <DataTableStyles.DataTableContainer>
        <TableHeader />
        {employees.length === 0 ? (
          <DataTableStyles.NoResultsMessage>Nenhum resultado encontrado</DataTableStyles.NoResultsMessage>
        ) : (
          employees.map((employee) => (
            <TableRow key={employee.id} employee={employee} />
          ))
        )}
      </DataTableStyles.DataTableContainer>
    </DataTableStyles.Container>
  );
};

export default DataTable;
