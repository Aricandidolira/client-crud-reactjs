import { CLIENT_SELECTED } from "./actios";

const initialState = {
  edit:{}
} ;

const client = (state = initialState, action:any) =>{
   switch (action.type) {

      case CLIENT_SELECTED: 
      console.log('passei aqui reducer')
        return{...state, edit: action.payload};

         default:
        return state;
      }
}

export default client;