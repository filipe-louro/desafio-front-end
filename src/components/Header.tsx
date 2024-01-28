import React from 'react';
import logo from '../public/assets/svg/logo.svg';
import * as HeaderStyles from '../styles/header/header-styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles.HeaderContainer>
      <HeaderStyles.Logo src={logo} alt="Logo da Empresa" />
    </HeaderStyles.HeaderContainer>
  );
};

export default Header;
