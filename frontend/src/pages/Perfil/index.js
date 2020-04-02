import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './style.css';
import api from '../../services/api';




export default function Perfil(){

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');

    const [casos, setCasos] = useState([]);

    useEffect( () => {
        api.get('perfil', {
            headers: 
            {
                authorization: ongId
            }
            
        }).then(response => {
            setCasos(response.data);
        })
    }, [ongId] );

    async function handleDeleteCaso(id){

        try{
            await api.delete('/casos/'+id, {headers: 
                {
                    authorization: ongId
                }});

            setCasos(casos.filter(caso => caso.id !== id));
        }catch{
            alert('Erro ao deletar o caso, tente novamente.');
        }

    }

    function handleLogout(){
        localStorage.clear();

        history.push("/");
    }

    return (
        <div className="perfil-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo, {ongNome}</span>

                <Link className="button" to="./casos/novo">Cadastrar Novo Caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size="18" color="E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                { casos.map(caso => (
                    <li key={caso.id}>
                        <strong>CASO:</strong>
                        <p>{caso.titulo}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{caso.descricao}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}</p>

                        <button type="button" onClick={() => handleDeleteCaso(caso.id)}>
                            <FiTrash2 size="20" color="A8A8B3" />
                        </button>
                    </li>
                ) )}                
            </ul>
        </div>
    );
}