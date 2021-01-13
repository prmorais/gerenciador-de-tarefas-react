import { Dispatch } from 'react';

export const ADICIONAR_TAREFA = 'ADICIONAR_TAREFA';
export const CONCLUIR_TAREFA = 'CONCLUIR_TAREFA';
export const REMOVER_TAREFA = 'REMOVER_TAREFA';
export const MUDAR_PAGINA = 'MUDAR_PAGINA';

export interface TarefaType {
  id: number;
  nome: string;
  concluida: boolean;
}

export interface InitialStateType {
  tarefas: TarefaType[];
  totalItens: number;
  itensPorPagina: number;
  paginaAtual: number;

};

export const initialState: InitialStateType = {
  tarefas: [],
  totalItens: 0,
  itensPorPagina: 3,
  paginaAtual: 1,
};

// export type tarefaAction = {
//   type: string,
//   id?: number,
//   nome?: string,
//   pagina?: number,
// };

export interface AddTarefaAction {
  type: typeof ADICIONAR_TAREFA,
  payload: {
    nome: string;
  },
};

export interface ConcluirTarefaAction {
  type: typeof CONCLUIR_TAREFA,
  payload: {
    id: number
  },
};

export interface RemoverTarefaAction {
  type: typeof REMOVER_TAREFA,
  payload: {
    id: number
  },
};

export interface MudarPaginaAction {
  type: typeof MUDAR_PAGINA,
  payload: {
    pagina: number
  },
};

export type ListAction = AddTarefaAction | ConcluirTarefaAction | RemoverTarefaAction | MudarPaginaAction;

export const initialConcluir: Dispatch<number> = (f: number) => f;
export const initialRemover: Dispatch<number> = (f: number) => f;
export const initialMudarPagina: Dispatch<number> = (pag: number) => pag;
export const initialAdicionar: Dispatch<string> = (nome: string) => nome;
