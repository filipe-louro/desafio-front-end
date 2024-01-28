import React, { useEffect, useState } from 'react';
import * as TableHeaderStyles from '../../styles/datatable/table-header-styles';

interface TableHeaderProps {
  isMobile?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <TableHeaderStyles.HeaderContainer>
      <TableHeaderStyles.HeaderContent>
        <TableHeaderStyles.HeaderItem>FOTO</TableHeaderStyles.HeaderItem>
        <TableHeaderStyles.HeaderItem>NOME</TableHeaderStyles.HeaderItem>
        {isMobile ? null : (
          <>
            <TableHeaderStyles.HeaderItem>CARGO</TableHeaderStyles.HeaderItem>
            <TableHeaderStyles.HeaderItem>DATA DE ADMISSÃO</TableHeaderStyles.HeaderItem>
            <TableHeaderStyles.HeaderItem>TELEFONE</TableHeaderStyles.HeaderItem>
          </>
        )}
        <TableHeaderStyles.ActionIndicator />
      </TableHeaderStyles.HeaderContent>
    </TableHeaderStyles.HeaderContainer>
  );
};

export default TableHeader;
