/// <reference types="styled-components/cssprop" />
import React from 'react';
import styled from 'styled-components';
import { MeterList } from './components/MeterList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.span`
  /* styleName: Headings/Heading 2; */
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
`;

function App() {
  return (
    <AppContainer>
      <ContentContainer>
        <Header>Список счётчиков</Header>
        <MeterList />
      </ContentContainer>
      <ToastContainer />
    </AppContainer>
  );
}

export default App;

