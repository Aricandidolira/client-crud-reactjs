import React, { useState } from 'react';
import { Content, Container } from './stylesCadastro';
import { useNavigate } from 'react-router-dom';
import InputMascaras from '../../../components/Input/indexInputMascara';
import Cabecalho, { TipoCabecalho } from '../../../components/Cabecalho/indexCabecalho';

export default function IndexCadastro({ ...props }) {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    nome:'',
    email:'',
    nascimento:'',
    profissao:'',
    observaca:'',
  })

  return (
    <Container>
    <Cabecalho 
    tipoCabecalho={TipoCabecalho.CADASTRO} 
    descricao="Cadastro de Cliente"
    handleBack={()=>{navigate('/listagem')}}
     />

      <Content>
        <div className="gridName">
          <div className="form">
            <p className="label">Nome:</p>
            <InputMascaras
              onChange={props.handleaddValues}
              id="nome"
              name="nome"
              width="100%"
              type="text"
              value={props.value}
            />
          </div>
        </div>
        <div className="gridEmail">
          <div className="form">
            <p className="label">E-mail:</p>
            <InputMascaras
              onChange={props.handleaddValues}
              id="email"
              name="email"
              width="100%"
              type="email"
              value={props.value}
            />
          </div>
        </div>
        <div className="gridNascimento">
          <div className="form">
            <p className="label">Data de Nascimento:</p>
            <InputMascaras
              onChange={props.handleaddValues}
              id="nascimento"
              name="nascimento"
              width="100%"
              type="date"
              value={props.value}
            />
          </div>
        </div>
        <div className="gridProfissao">
          <div className="form">
            <p className="label">Profissão:</p>
            <InputMascaras
              onChange={props.handleaddValues}
              id="profissao"
              name="profissao"
              width="100%"
              type="text"
              value={props.value}
            />
          </div>
        </div>
        <div className="gridObs">
          <div className="form">
            <p className="label">Observacao:</p>
            <InputMascaras
              onChange={props.handleaddValues}
              id="observacao"
              name="observacao"
              width="100%"
              height="10rem"
              type="textarea"
              value={props.value}
            />
          </div>
        </div>
      </Content>
    </Container>
  );
}
