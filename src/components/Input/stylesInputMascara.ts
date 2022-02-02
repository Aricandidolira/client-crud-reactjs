import styled from 'styled-components';

interface IInput{
  width:string;
  height:string;
  background:string;
}

export const Container = styled.div`
  margin-top: 0.4rem;
`;

export const ContainerInput = styled.input<IInput>`
  width: ${({width}) => (width ? width : '25rem')};
  height:${({height}) => (height ? height : '4rem')};
  background: ${({background}) => (background ? background : '#b1cdcd')};
  border: 0.1rem solid #000;
  color:#000;
  font-weight: 400;
  padding: 0 1rem;
  font-size: 1.6rem;
  &:focus {
    border: 0.2rem solid #000;
  }
  &placeholder {
    color:gray;
    font-size: 1.6rem;
  }
`;
