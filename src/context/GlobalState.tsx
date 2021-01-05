import React, { createContext, useReducer } from 'react';

import { AppReducer } from './AppReducer';
import {
  initialAdicionar,
  initialConcluir,
  // initialDispatch,
  initialMudarPagina,
  initialRemover,
  initialState,
} from './types/ContextTypes';

// Create context
const GlobalContext = createContext({
  state: initialState,
  concluirTarefa: initialConcluir,
  removerTarefa: initialRemover,
  // dispatch: initialDispatch,
  handleMudarPagina: initialMudarPagina,
  handleTextTarefa: initialAdicionar,
});


const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleMudarPagina = (pagina: number) => {
    dispatch({
      type: 'MUDAR_PAGINA',
      pagina,
    });
  };

  const concluirTarefa = (id: number) => {
    dispatch({
      type: 'CONCLUIR_TAREFA',
      // pagina,
      id,
    });
  };

  const handleTextTarefa = (nome: string) => {
    dispatch({
      type: 'ADICIONAR_TAREFA',
      // pagina,
      nome,
    });
  };

  const removerTarefa = (id: number) => {
    dispatch({
      type: 'REMOVER_TAREFA',
      // pagina,
      id,
    });
  };

  const value = {
    state,
    concluirTarefa,
    removerTarefa,
    handleTextTarefa,
    handleMudarPagina,
    //dispatch,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
