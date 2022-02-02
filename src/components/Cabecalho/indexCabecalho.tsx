import React from 'react';

import { Container, Header } from './stylesCabecalho';

export enum TipoCabecalho {
  LISTAGEM = 'listagem',
  CADASTRO = 'cadastro',
}

interface ICabecalho {
  tipoCabecalho: TipoCabecalho;
  descricao: string;
  handleSave?: () => void;
  handleBack?: (e: any) => void;
  handleNew?: () => void;
  handleSearch?: () => void;
  disabled?: any;
}

function Cabecalho( props: ICabecalho) {
  return (
    <Container>
      {props.tipoCabecalho === 'listagem'  && (
        <Header>

          <div className="title">
            <h1 className="desc">{props.descricao}</h1>
          </div>
          <div className="btn-new">
            <button type="button" onClick={props.handleNew}> + Novo </button>
          </div>
          <div className="search">

            <input type="search" name="search" id="search" />
            <button type="submit" className="btn-search" onClick={props.handleSearch}>Pesquisar</button>
          </div>

        </Header>
      ) }
     { props.tipoCabecalho === 'cadastro'  &&   (
        <Header>

          <div className="title">
            <h1 className="desc">{props.descricao}</h1>
          </div>
          <div className="btn-back">
            <button id="voltar" type="button" onClick={props.handleBack}>Voltar</button>
            <button id="gravar" type="button" onClick={props.handleSave}> Gravar </button>
          </div>
        </Header>
      )}
    </Container>
  );
}

export default Cabecalho;
