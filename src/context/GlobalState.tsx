import React, { createContext, useReducer } from 'react';

import { AppReducer } from './AppReducer';
import {
  ADICIONAR_TAREFA,
  CONCLUIR_TAREFA,
  MUDAR_PAGINA,
  REMOVER_TAREFA,
  initialAdicionar,
  initialConcluir,
  initialMudarPagina,
  initialRemover,
  initialState,
} from './types/ContextTypes';

// Create context
const GlobalContext = createContext({
  state: initialState,
  concluirTarefa: initialConcluir,
  removerTarefa: initialRemover,
  handleMudarPagina: initialMudarPagina,
  handleTextTarefa: initialAdicionar,
});


const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleMudarPagina = (pagina: number) => {
    dispatch({
      type: MUDAR_PAGINA,
      pagina,
    });
  };
  // const handleMudarPagina = (pagina: number) => {
  //   dispatch({
  //     type: MUDAR_PAGINA,
  //     payload: {
  //       pagina,
  //     },
  //   });
  // };

  const concluirTarefa = (id: number) => {
    dispatch({
      type: CONCLUIR_TAREFA,
      id,
    });
  };

  // const concluirTarefa = (id: number) => {
  //   dispatch({
  //     type: CONCLUIR_TAREFA,
  //     payload: {
  //       id,
  //     },
  //   });
  // };

  const handleTextTarefa = (nome: string) => {
    dispatch({
      type: ADICIONAR_TAREFA,
      nome,
    });
  };

  // const handleTextTarefa = (nome: string) => {
  //   dispatch({
  //     type: ADICIONAR_TAREFA,
  //     payload: {
  //       nome,
  //     },
  //   });
  // };

  const removerTarefa = (id: number) => {
    dispatch({
      type: REMOVER_TAREFA,
      id,
    });
  };

  // const removerTarefa = (id: number) => {
  //   dispatch({
  //     type: REMOVER_TAREFA,
  //     payload: {
  //       id,
  //     },
  //   });
  // };

  const value = {
    state,
    concluirTarefa,
    removerTarefa,
    handleTextTarefa,
    handleMudarPagina,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
