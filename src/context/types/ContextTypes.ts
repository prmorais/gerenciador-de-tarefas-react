import { Dispatch } from 'react';

export type TarefaType = {
  id: number;
  nome: string;
  concluida: boolean;
}

export type InitialStateType = {
  tarefas: TarefaType[],
  totalItens: number,
  itensPorPagina: number,
  paginaAtual: number,

};

export const initialState: InitialStateType = {
  tarefas: [],
  totalItens: 0,
  itensPorPagina: 3,
  paginaAtual: 1,
};

export type tarefaAction = {
  type: string,
  id?: number,
  nome?: string,
  pagina?: number,
};

export const initialConcluir: Dispatch<number> = (f: number) => f;
export const initialRemover: Dispatch<number> = (f: number) => f;
export const initialMudarPagina: Dispatch<number> = (pag: number) => pag;
export const initialAdicionar: Dispatch<string> = (nome: string) => nome;
