import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  position: relative;
  background: #1c1c1c;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding: 0 32px;

  @media (max-width: 767px) {
    height: 60px;
    position: relative;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-right: 16px;

  @media (max-width: 767px) {
    width: 150px;
  }
`;
