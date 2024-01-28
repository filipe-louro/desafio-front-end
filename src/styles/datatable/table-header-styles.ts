import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 47px;
  background: #5984c0;
  border: 1px solid #dfdfdf;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > * {
    flex: 1;
  }
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: end;
  position: relative;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: end;
    align-content: space-around;
    padding: 0px 30px 0px 30px;
  }
`;

export const HeaderItem = styled.div`
  color: white;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 500;
  word-wrap: break-word;
  text-align: center;
`;

export const ActionIndicator = styled.div`
  @media (max-width: 768px) {
    display: block;
    background: white;
    justify-self: center;
    width: 15px;
    height: 15px;
    border-radius: 9999px;
  }
`;
