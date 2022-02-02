import React, { lazy, Suspense } from 'react';
import {Routes as Switch, Route } from 'react-router-dom';

const Home =  lazy(() => import('../pages/home'));
const ListagemCliente = lazy(() => import('../pages/clientes/Listagem/indexListagem'));
const CadastroCliente = lazy(() => import('../pages/clientes/Cadastro/indexCadastro'));

 function Routes() {
  return (
    <Suspense fallback={<>...</>}>
    <Switch>
    <Route path="/" element={<Home/>} />
    <Route path="/listagem" element={<ListagemCliente/>} />
    <Route path="/cadastro" element={<CadastroCliente/>} />
  </Switch>
  </Suspense>
  );
  }

  export default Routes;