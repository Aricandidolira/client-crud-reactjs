import styled from 'styled-components';

export const Container = styled.div`
  width: inherit;
  height: inherit;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #0a0b5c;

  height: 15rem;

  .title {
    display: flex;
    justify-content: center;

    width: 100%;

    align-self: flex-start;

    margin-top: 1.5rem;

    .desc {
      font-size: 3rem;
      margin-left: 2rem;
      color:white;
    }

  }

  .btn-new {
    display: flex;
    align-self: flex-end;
    border: none;

    margin-right: 1rem;

    button {
      background-color: #009900;
      color: white;

      font-size: 1.8rem;
      width: 15rem;
      height: 4rem;

      transition: filter 2s;

&:hover {
  filter: brightness(60%);
}
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;

    input {
      width: 50%;
      height: 3.5rem;
    }

    .btn-search {
      background-color: blue;
      color: white;

      font-size: 1.8rem;
      width: 10rem;
      height: 3.5rem;
    }
  }

  .btn-back {
    display: flex;
    align-items: center;
    justify-content:flex-end;
    padding-right: 2rem;

    border: none;

    #voltar{
      background-color: #b30000;
      margin-right: 1rem;

    }
    #gravar{
      background-color: #009900;
    }

    button {
      color: white;
      font-size: 1.8rem;
      width: 15rem;
      height: 4rem;

      transition: filter 2s;

      &:hover {
        filter: brightness(60%);
      }
    }
  }
`;
