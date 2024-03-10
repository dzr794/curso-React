
export const todoReducer = ( initialState = [], action ) => {

  switch ( action.type ) {
    case 'ABC':
      throw new Error('Ation.type = ABC, aun no se ha implementado')
      
  
    default:
      return initialState;
  }

}

