import React, { useState, useEffect } from 'react';
import RowIcon from '../../public/assets/svg/row-icon.svg';
import { Employee } from '../../interfaces/employee';
import * as TableRowStyles from '../../styles/datatable/table-row-styles';
import "typeface-roboto";

interface TableRowProps {
  employee: Employee;
}

const TableRow: React.FC<TableRowProps> = ({ employee }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      {isMobile ? (
        <>
          <TableRowStyles.RowContainerMobile>
            <TableRowStyles.RowContentMobile>
              <TableRowStyles.Avatar src={require(`../../public${employee.image}`)} />
              <TableRowStyles.DisplayInfo>{employee.name}</TableRowStyles.DisplayInfo>
              <TableRowStyles.ExpandButton src={RowIcon} alt="Logo da Empresa" onClick={toggleDetails} rotate={showDetails}></TableRowStyles.ExpandButton>
            </TableRowStyles.RowContentMobile>
            {showDetails && (
              <>
                <TableRowStyles.Details>
                  <TableRowStyles.AdditionalInfoRow>Cargo</TableRowStyles.AdditionalInfoRow><TableRowStyles.AdditionalInfo>{employee.role}</TableRowStyles.AdditionalInfo>
                  <TableRowStyles.AdditionalInfoRow>Data de admissão</TableRowStyles.AdditionalInfoRow><TableRowStyles.AdditionalInfo>{employee.admission_date}</TableRowStyles.AdditionalInfo>
                  <TableRowStyles.AdditionalInfoRow>Telefone</TableRowStyles.AdditionalInfoRow><TableRowStyles.AdditionalInfo>{employee.cellphone}</TableRowStyles.AdditionalInfo>
                </TableRowStyles.Details>
              </>
            )}
          </TableRowStyles.RowContainerMobile>
          <TableRowStyles.Divider />
        </>
      ) : (
        <TableRowStyles.RowContainerDesktop>
          <TableRowStyles.Avatar src={require(`../../public${employee.image}`)} />
          <TableRowStyles.DisplayInfo>{employee.name}</TableRowStyles.DisplayInfo>
          <TableRowStyles.DisplayInfo>{employee.role}</TableRowStyles.DisplayInfo>
          <TableRowStyles.DisplayInfo>{employee.admission_date}</TableRowStyles.DisplayInfo>
          <TableRowStyles.DisplayInfo>{employee.cellphone}</TableRowStyles.DisplayInfo>
        </TableRowStyles.RowContainerDesktop>
      )}
    </>
  );
};

export default TableRow;
