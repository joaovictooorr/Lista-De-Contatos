import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removerContato, EditContato } from '../redux/contatoSlice';
import styled from 'styled-components';
import { Contato } from '../tipos/types';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #f44436;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Input = styled.input`
  padding: 5px;
  font-size: 14px;
  margin-right: 5px;
`;

const ContatoList: React.FC = () => {
  const contatos = useSelector((state: RootState) => state.contato);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState<string | null>(null);
  const [editContato, setEditContato] = useState<Contato>({
    id: '',
    nome: '',
    email: '',
    telefone: '',
  });


  const handleEditClick = (contato: Contato) => {
    setEditId(contato.id);
    setEditContato(contato);
  };


  const handleSaveClick = () => {
    if (editId) {

      dispatch(EditContato(editContato));
      setEditId(null); 
    }
  };


  const handleCancelClick = () => {
    setEditId(null);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditContato((prev) => ({ ...prev, [name]: value }));
  };


  const handleRemoveClick = (id: string) => {
    dispatch(removerContato(id));
  };

  return (
    <List>
      {contatos.map((contato) => (
        <ListItem key={contato.id}>
          {editId === contato.id ? (
            <>
              <Input
                type="text"
                name="nome"
                value={editContato.nome}
                onChange={handleChange}
                placeholder="Nome"
              />
              <Input
                type="email"
                name="email"
                value={editContato.email}
                onChange={handleChange}
                placeholder="E-mail"
              />
              <Input
                type="tel"
                name="telefone"
                value={editContato.telefone}
                onChange={handleChange}
                placeholder="Telefone"
              />
              <Button onClick={handleSaveClick}>Salvar</Button>
              <Button onClick={handleCancelClick}>Cancelar</Button>
            </>
          ) : (
            <>
              <span>{contato.nome}</span>
              <span>{contato.email}</span>
              <span>{contato.telefone}</span>
              <Button onClick={() => handleEditClick(contato)}>Editar</Button>
              <Button onClick={() => handleRemoveClick(contato.id)}>Remover</Button>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default ContatoList;
