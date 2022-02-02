import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding:0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif;

}

body{
  background:#F6F5FC;

-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*::-webkit-scrollbar-track {
  background-color: #1b1e25;
}
*::-webkit-scrollbar {
  width: 0.2rem;
  background: #e2f2e6;
}
*::-webkit-scrollbar-thumb {
  background: #e2f2e6;
}

html {
  font-size: 62.5%;
}

button{
  cursor: pointer;
  border:none;
}


`;
