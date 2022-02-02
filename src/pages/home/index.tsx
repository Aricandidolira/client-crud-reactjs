import React from 'react';
import { Container } from './styles';

import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate()
  return (
  
<Container>
  <div> 
    <h1>Home</h1>
    <h3> Para acessar CRUD de cliente, clique no botão abaixo!</h3>
    <button type="button" onClick={() => navigate('/listagem') }>CRUD</button>
  </div>
  </Container>);
}
