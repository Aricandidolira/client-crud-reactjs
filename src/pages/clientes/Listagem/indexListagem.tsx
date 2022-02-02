import React, { useEffect, useState } from 'react';
import { IClient } from '../../../store/modules/cliente/types';
import api from '../../../service/api'
import { useNavigate } from 'react-router-dom';
import {
  Container, ListBody, ListHead, Section,
} from './stylesListagem';
import Cabecalho, { TipoCabecalho } from '../../../components/Cabecalho/indexCabecalho';
import NestedModal from '../../../components/Modal/modal';
import { clientSeleted } from '../../../store/modules/cliente/actios';
import { useDispatch } from 'react-redux';


export default function ListagemClientes() {  
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [listClient, setListClient] = useState<IClient[]>([])

const handleLoading = async () => {
  try {
    const {data} = await api.get('cliente');
    if(data){
      setListClient(data);
    }
  }
  catch(e) {   throw new Error('e');}
}

  const handleEdit = (elements:any)=>{
      dispatch(clientSeleted(elements));      
      navigate('/cadastro');       
  }

  const handleRemove = async (id:string)=>{
    try{

      const remove = await api.delete(`cliente/${id}`);

      console.log('remove', remove)

    }
    catch(e) {
      throw new Error('e');
    }

  }

    useEffect(()=>{
      handleLoading()
    },[])


  return (
    <Container>
      <Cabecalho 
            tipoCabecalho={TipoCabecalho.LISTAGEM} 
            descricao="Listagem de Clientes"
            handleNew={()=>{navigate('/cadastro')}}
             />
      <Section>
        <ListHead>
          <div className="columns">
            <p>Razão Social</p>
          </div>
          <div className="columns">
            <p>E-mail</p>
          </div>
          <div className="columns">
            <p>Nascimento</p>
          </div>
          <div className="columns">
            <p>Profissão</p>
          </div>
          <div className="columns">
            <p>Ações</p>
          </div>
        </ListHead>
        { listClient && listClient.length > 0 && listClient.map((el:any, idx:number) => (
          <ListBody key={idx}>
            <div className="columns">
              <p id="name">{el.nome}</p>
            </div>
            <div className="columns">
              <p>{el.email}</p>
            </div>
            <div className="columns">
              <p>{el.nascimento}</p>
            </div>
            <div className="columns">
              <p>{el.profissao}</p>
            </div>
            <div className="actions">
              <span id="update" onClick={()=>{
                handleEdit(el)
              }}>⟳</span>
              <span id="delete" >
                  <NestedModal 
                              btnModal="x" 
                              txtModal="Deseja Excluir o registro?"
                              subTxtModal='Atenção, os dados do cliente serão removidos!'
                              handlGravar={()=>{  handleRemove(el.id)}}
                              />
                </span>

            </div>
          </ListBody>
        ))}

      </Section>
    
    </Container>

  );
}
