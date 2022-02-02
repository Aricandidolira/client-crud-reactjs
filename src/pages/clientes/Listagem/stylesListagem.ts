import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 99vw;
  background-color: #5c5fe1;
  color: #fff;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  padding: 2rem 0;
`;
export const ListHead = styled.div`
  display: grid;
  grid-template-columns:
  minmax(10rem, 32rem) minmax(15rem, 24rem) minmax(8rem, 14rem)
    minmax(9rem, 20rem) 8rem;

  font-size: 1.4rem;
  font-weight: 600;

  background: black;
  margin-bottom: 0.5rem;


  border-radius: 1rem;

  .columns {
    padding: 1rem 0.5rem;

  }
`;
export const ListBody = styled.div`
  display: grid;
  grid-template-columns:
    minmax(10rem, 32rem) minmax(15rem, 24rem) minmax(8rem, 14rem)
    minmax(9rem, 20rem) 8rem;

  font-weight: 600;

  color: red;
  background: #b1cdcd;

  min-height: 2.5rem;
  height: max-content;
  word-break: break-all;
  margin: 0.2rem;

  border-radius:0.5rem;

  .columns {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;

    color: #000;
    p {
      font-size: 1.5rem;
    }
    #name {
      padding-left: 0.8rem;
    }
  }

  .actions {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    cursor: pointer;
    font-size: 1.7rem;

    #update{
      color: blue;
    }
    #delete{
      color: #b30000;
    }
  }
`;
