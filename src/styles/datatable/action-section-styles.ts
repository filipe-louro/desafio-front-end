import styled from "styled-components";

export const ActionSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  color: #1c1c1c;
  font-size: 24px;
  font-family: "Roboto";
  font-weight: 500;
  word-wrap: break-word;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchBar = styled.input`
  padding: 8px 36px 8px 8px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 8px;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  @media (max-width: 768px) {
    top: 60%;
  }
`;
