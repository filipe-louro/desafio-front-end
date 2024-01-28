import styled from "styled-components";

export const Avatar = styled.img`
  width: 34px;
  height: 33px;
  border-radius: 9999;
`;

export const DisplayInfo = styled.div`
  font-family: "Roboto";
  font-weight: 400;
  color: #1c1c1c;
  font-size: 16px;
`;

export const ExpandButton = styled.img<{ rotate?: boolean }>`
  transition: transform 0.3s;

  ${({ rotate }) => rotate && "transform: rotate(180deg);"}
`;

export const AdditionalInfoRow = styled.div`
  color: #1c1c1c;
  font-size: 18px;
  font-family: "Roboto";
  font-weight: 500;
  border-bottom: 1px dashed #dfdfdf;
`;

export const AdditionalInfo = styled.div`
  color: #1c1c1c;
  font-size: 18px;
  font-family: "Roboto";
  text-align: right;
  border-bottom: 1px dashed #dfdfdf;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 0px;
  padding: 16px 0px;
`;

export const Divider = styled.div`
  border: 1px #dfdfdf solid;
`;

export const RowContainerMobile = styled.div`
  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  display: grid;
  padding: 16px 30px 0px 30px;
`;

export const RowContentMobile = styled.div`
  display: grid;
  font-family: "Roboto";
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  justify-items: center;
  align-items: center;
  padding-bottom: 16px;
`;

export const RowContainerDesktop = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid #dfdfdf;
  justify-items: center;
  padding: 5px 0px 5px 0px;
`;
