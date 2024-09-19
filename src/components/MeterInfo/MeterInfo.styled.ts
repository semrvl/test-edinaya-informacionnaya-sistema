import styled from "styled-components";

export const MeterInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 150px 150px 100px 1fr 150px 50px;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: #F7F8F9;
  }

  &:hover button {
    opacity: 1;
  }
`;



export const WaterTypeIcon = styled.div`
    display: flex;
  align-items: center;
  color: #333;
  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  opacity: 0;

  img {
    width: 40px;
    height: 40px;
  }

  &:hover img {
    opacity: 0.7;
  }
`;
