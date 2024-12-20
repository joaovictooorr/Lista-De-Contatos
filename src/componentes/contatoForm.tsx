import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContato } from '../redux/contatoSlice';
import styled from 'styled-components';
import { Contato } from '../tipos/types';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 8px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover{
        brackground-color: #45a049;
    }
`;

const uuidv4 = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const ContatoForm: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const dispatch = useDispatch();

    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(nome && email && telefone){
            const newContato: Contato = { id: uuidv4(), nome,email,telefone};
            dispatch(addContato(newContato));
            setNome('');
            setEmail('');
            setTelefone('');
        }
    }

    return (
        <Form onSubmit={handlerSubmit}>
            <Input
                type='text'
                placeholder='nome completo'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <Input
                type='text'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type='text'
                placeholder='telefone'
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />
            <Button type='submit'>Adicionar contato</Button>
        </Form>
    );
};

export default ContatoForm;

