import React from 'react';
import Magnifying from '../public/assets/svg/magnifying-glass.svg';
import * as ActionSectionStyles from '../styles/datatable/action-section-styles';

interface ActionSectionProps {
  title: string;
  onSearchChange: (query: string) => void;
}

const ActionSection: React.FC<ActionSectionProps> = ({ title, onSearchChange }) => {
  return (
    <ActionSectionStyles.ActionSectionContainer>
      <ActionSectionStyles.Title>{title}</ActionSectionStyles.Title>
      <ActionSectionStyles.SearchBarContainer>
        <ActionSectionStyles.SearchBar
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <ActionSectionStyles.SearchIcon src={Magnifying} alt="Ícone de Pesquisa" />
      </ActionSectionStyles.SearchBarContainer>
    </ActionSectionStyles.ActionSectionContainer>
  );
};

export default ActionSection;
