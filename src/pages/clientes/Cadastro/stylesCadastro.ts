import styled from 'styled-components';

export interface ICadastroCli {
  align?:string;
  height?:string;
  width?:string;
}
export const Container = styled.div`
  min-height: 100vh;
  min-width: 99vw;
  background-color: #5c5fe1;
  color: #fff;
`;



export const Content = styled.div<ICadastroCli>`
  max-width: 90rem;
  margin:0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(0.1rem, 1fr);
  gap: 0.5rem 1rem;
  grid-auto-flow: row;
  padding: 1.5rem;
  grid-template-areas:
    "nome nome email"
    "nascimento profissao profissao"
    "observacion observacion observacion"
    "gravar gravar gravar";



  .gridName {
    grid-area: nome;
  }
  .gridEmail {
    grid-area: email;
  }
  .gridNascimento {
    grid-area: nascimento;
  }
  .gridProfissao {
    grid-area: profissao;
  }

  .gridObs {
    grid-area: observacion;

  }
  .gridGravar {
    grid-area: gravar;

    button{
      background-color: #009900;
      color: white;
      font-size: 1.8rem;
      height: 4rem;
      margin-top: 1rem;

      transition: filter 2s;

      &:hover {
        filter: brightness(60%);
      }
    }
  }


  .form {
    display: flex;
    flex: 1;
    height: ${({ height }) => height || 'auto'};
    flex-direction: column;
    align-items: ${({ align }) => align || 'stretch'};
    .label {
      font-weight: 600;
      color: black;
      font-size: 1.4rem;
    }
  }


`;
