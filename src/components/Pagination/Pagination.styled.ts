import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;

export const PaginationButton = styled.button<{ active: boolean }>`
  padding: 10px 15px;
  margin: 0 5px;
  background-color: ${props => (props.active ? '#CED5DE' : '#fff')};
  color: #black;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:disabled {
    cursor: not-allowed;
    background: #dee2e6;
    color: #aaa;
  }
`;

export const Dots = styled.span`
  margin: 0 5px;
  padding: 10px 15px;
  color: #999;
`;
