import React from 'react';
import ContatoForm from './componentes/contatoForm';
import ContatoList from './componentes/contatoList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>Lista de Contatos</Title>
      <ContatoForm/>
      <ContatoList/>
    </Container>
  );
};

export default App
