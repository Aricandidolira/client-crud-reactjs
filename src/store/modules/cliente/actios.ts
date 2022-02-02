export const CLIENT_SELECTED = '[CRUD]CLIENT_SELECTED'

export const clientSeleted = (element:any) => (dispatch:any)=>{

        dispatch({type: CLIENT_SELECTED, payload: element});
        console.log('passei aqui action')
        
}

