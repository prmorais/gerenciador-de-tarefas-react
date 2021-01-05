import Tarefa from '../models/Tarefa.model';
import {
  initialState,
  InitialStateType,
  // tarefaAction,
  TarefaType,
} from './types/ContextTypes';

export const AppReducer = (state: InitialStateType = initialState, action: any) => {
  // Obtém as variáves da action com destructor
  const { id, pagina, nome } = action;

  // Obtém as variáves do state com destructor
  const { itensPorPagina, paginaAtual, tarefas } = state;

  // Acessa o localStorage e pega a lista de tarefas
  const tarefasDb = localStorage['tarefas'];
  let listarTarefas: TarefaType[] = tarefasDb ? JSON.parse(tarefasDb) : [];
  let novaPagina = paginaAtual;

  // Seta o total de itens do state igual ao tamanho da lista de tarefas do localStorage
  const totalItens = listarTarefas.length;

  // const mudarPagina = (pag: number, pagAtual: number, itensPorPag: number) => {
  //   if (pag) {
  //     pagAtual = pag;
  //     return listarTarefas = listarTarefas.splice((pagAtual - 1) * itensPorPag, itensPorPag);
  //   }
  // };

  switch (action.type) {
    case 'MUDAR_PAGINA':
      // mudarPagina(pagina!, paginaAtual, itensPorPagina);
      if (pagina) {
        // let paginaAtual = pagina;
        listarTarefas = listarTarefas.splice((pagina - 1) * itensPorPagina, itensPorPagina);
      }

      console.log('PAGINA EM MUDAR PAGINA ' + paginaAtual);

      return {
        ...state,
        paginaAtual: pagina,
        itensPorPagina: itensPorPagina,
        totalItens: totalItens,
        tarefas: listarTarefas,

      };

    case 'CONCLUIR_TAREFA':
      // tarefas.map(tarefa => {
      //   if (tarefa.id === id) {
      //     tarefa.concluida = true;
      //     // tarefa = { ...tarefa, concluida: true };
      //   }
      //   return tarefa;
      // });

      listarTarefas.map(t => {
        if (t.id === id) {
          t.concluida = true;
          // t = { ...t, concluida: true };
        }
        return t;
      });

      localStorage['tarefas'] = JSON.stringify(listarTarefas);
      // listarTarefas = mudarPagina(pagina!, paginaAtual, itensPorPagina);
      // paginaAtual = pagina;
      console.log('PAGINA EM CONCLUIR TAREFA ' + paginaAtual);
      // let paginaAtual = pagina;
      listarTarefas = listarTarefas.splice((pagina - 1) * itensPorPagina, itensPorPagina);

      return {
        ...state,
        paginaAtual,
        itensPorPagina: itensPorPagina,
        totalItens: totalItens,
        tarefas: listarTarefas,
      };

    case 'ADICIONAR_TAREFA':
      if (nome) {
        const novaTarefa = new Tarefa(new Date().getTime(), nome, false);
        listarTarefas.push(novaTarefa);
        localStorage['tarefas'] = JSON.stringify(listarTarefas);

      }
      // let paginaAtual = pagina;
      console.log('NOVA PAGINA EM ADICIONAR TAREFA ANTES DO IF ' + novaPagina);


      if (tarefas.length === itensPorPagina && paginaAtual !== 0) {
        novaPagina = paginaAtual + 1;
        console.log('NOVA PAGINA EM ADICIONAR TAREFA DENTRO DO IF ' + novaPagina);
      }

      console.log('NOVA PAGINA EM ADICIONAR TAREFA DEPOS DO IF ' + novaPagina);

      listarTarefas = listarTarefas.splice((novaPagina - 1) * itensPorPagina, itensPorPagina);

      return {
        ...state,
        paginaAtual: novaPagina,
        itensPorPagina: itensPorPagina,
        totalItens: totalItens,
        tarefas: listarTarefas,
      };

    case 'REMOVER_TAREFA':
      // Filtra a lista de tarefas no localStage excluindo uma tarefa
      listarTarefas = listarTarefas.filter(tarefa => tarefa.id !== id);

      // Salava no localStorage a lista de tarefas
      localStorage['tarefas'] = JSON.stringify(listarTarefas);

      // let novaPagina = paginaAtual;

      if (tarefas.length === 1 && paginaAtual !== 1) {
        novaPagina = paginaAtual - 1;
      }

      listarTarefas = listarTarefas.splice((novaPagina - 1) * itensPorPagina, itensPorPagina);

      return {
        ...state,
        paginaAtual: novaPagina,
        itensPorPagina: itensPorPagina,
        totalItens: totalItens,
        tarefas: listarTarefas,
      };

    default:
      return state;
  }
};
