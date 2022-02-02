import styled from 'styled-components';

export const Container = styled.button`
display: flex;
justify-content:center;
align-items:center;

width: 100%;
background: #5c5fe1;

`;
export const ComponentButton = styled.button`
      background-color: #009900;
      color: white;
      font-size: 1.8rem;
      height: 5rem;
      margin-top: 1rem;

      width: 20rem;

      transition: filter 2s;

      &:hover {
        filter: brightness(60%);
      }

`;
