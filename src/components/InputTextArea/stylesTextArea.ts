import styled from 'styled-components';

interface propsInput {
  width?: string;
  alinhamento?: string;
  height?: string;
  marginTop?: string;
  resize?: string;
  disabled?: boolean;
  background?:string;
}

export const Container = styled.div``;

export const TextArea = styled.textarea<propsInput>`
    display: flex;
    border: 0.15rem solid gray;
    background: ${({background}) => (background ? background : '#b1cdcd')};
    color:black;
    font-size: 1.4rem;
    resize: ${({resize}) => (resize ? resize : 'none')};
    width: ${( {width}) => (width ? width : '100%')};
    height: ${({height}) => (height ? height : '8rem')};
    font-weight: 400;
    text-align: ${({alinhamento}) =>
      alinhamento ? alinhamento : 'start'};
    padding: 0.5rem;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: text;
    margin-top: ${({marginTop}) => (marginTop ? marginTop : '0.5rem')};
    &:focus {
      border: 0.15rem solid grayscale};
    
    &placeholder {
      color: grayscale;
    }
  
  `;