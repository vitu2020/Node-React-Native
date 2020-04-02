import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function NovoCaso(){

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleCadastroNovoCaso(e){

        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor
        }

        try{

            api.post("casos", data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/perfil');

        }catch{
            alert('Erro no cadastro de um novo caso, tente novamente.');
        }
        

    }

    return (
        <div className="novo-caso-container">
            <div className="content">
                <section>

                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastrar Novo Caso</h1>

                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="../perfil">
                    <FiArrowLeft size="16" color="E02041" />
                    Voltar para Home
                </Link>

                </section>

                <form onSubmit={handleCadastroNovoCaso}>

                    <input type="text" 
                    placeholder="Título do Caso"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)} />
                    <textarea 
                    placeholder="Descrição"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)} />
                    <input type="text" 
                    placeholder="Valor em Reais"
                    value={valor}
                    onChange={e => setValor(e.target.value)} />

                    <button type="submit" className="button" >Cadastrar</button>

                </form>

            </div>
        </div>
    );
}