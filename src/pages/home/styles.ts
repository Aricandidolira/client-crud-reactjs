import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

    min-width: 99vw;
    min-height: 100vh;
    background-color: #5c5fe1;
    color: #000;

    font-size: 2.5rem;

    h1{
      margin: 2rem 0;
    }

    div{ 
      display: flex;
      flex-direction: column;
      align-items: center;

      button{
        margin-top:1rem;
        width:20rem;
        height:5rem;
        background-color: blue;
        color: white;

        font-weight: 600;

        border-radius: 1rem;

        font-size: 1.7rem;

        transition: filter 2s;

        &:hover{
          filter: contrast(58%);
        }
      }
    }
`;
