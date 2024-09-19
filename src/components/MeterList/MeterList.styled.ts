import styled from "styled-components";
import { keyframes } from "styled-components";

export const MeterListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  font-size: 13px;
  `;

export const MeterListHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 150px 150px 100px 1fr 150px 50px;
  background-color: #F0F3F7;
  padding: 10px;
  font-weight: bold;
  position: sticky;
  top: 0;
  color: #697180;
 `;

export const MeterListBody = styled.div`
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
