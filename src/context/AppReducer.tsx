import Tarefa from '../models/Tarefa.model';
import {
  ADICIONAR_TAREFA,
  CONCLUIR_TAREFA,
  initialState,
  InitialStateType,
  ListAction,
  MUDAR_PAGINA,
  REMOVER_TAREFA,
  TarefaType,
} from './types/ContextTypes';

export const AppReducer = (state = initialState, action: ListAction): InitialStateType => {
  // Obtém as variáves do state com destructor
  const { itensPorPagina, paginaAtual, tarefas } = state;

  // Acessa o localStorage e pega a lista de tarefas
  const tarefasDb: TarefaType[] = localStorage['tarefas'];
  let listarTarefas: TarefaType[] = tarefasDb ? JSON.parse(tarefasDb.toString()) : [];

  // Cria a constante totalItens e atribui a ela o tamanho da lista de tarefas do localStorage
  const totalItens = listarTarefas.length;
  const totalItensPorPagina = tarefas.length;

  // Calcula o número de páginas para paginação
  const numPaginas = Math.ceil(totalItens / itensPorPagina);

  // Cria a variável novaPágina e atribui a ela o valor da página atual
  let novaPagina = paginaAtual;

  switch (action.type) {
    case MUDAR_PAGINA:
      const { pagina } = action.payload;
      if (pagina) {
        listarTarefas = listarTarefas.splice((action.payload.pagina - 1) * itensPorPagina, itensPorPagina);
      }

      console.log('ACTION MUDAR PAGINA\n--------------------\nPagina atual: ' + paginaAtual +
        '\nTotal de itens: ' + totalItens);

      return {
        ...state,
        paginaAtual: pagina,
        itensPorPagina,
        totalItens,
        tarefas: listarTarefas,

      };

    case CONCLUIR_TAREFA:

      listarTarefas.map(tarefa => {
        const { id } = action.payload;

        if (tarefa.id === id) {
          tarefa.concluida = true;
        }

        return tarefa;
      });

      // Salva no localStorage
      localStorage['tarefas'] = JSON.stringify(listarTarefas);

      // Aplica a paginação
      listarTarefas = listarTarefas.splice((paginaAtual - 1) * itensPorPagina, itensPorPagina);

      console.log('ACTION CONCLUIR TAREFA\n--------------------\nPagina atual: ' + paginaAtual +
        '\nTotal de itens: ' + totalItens + '\nNova pagina: ' + novaPagina);

      return {
        ...state,
        paginaAtual,
        itensPorPagina,
        totalItens,
        tarefas: listarTarefas,
      };

    case ADICIONAR_TAREFA:
      const { nome } = action.payload;
      if (nome) {
        const novaTarefa = new Tarefa(new Date().getTime(), nome, false);
        listarTarefas.push(novaTarefa);
        localStorage['tarefas'] = JSON.stringify(listarTarefas);

        if (totalItensPorPagina === itensPorPagina) {
          novaPagina = paginaAtual + 1;
        }
        if (numPaginas === 0) {
          novaPagina = 1;
        } else {
          novaPagina = numPaginas;
        }

      }

      // Aplica a paginação
      listarTarefas = listarTarefas.splice((novaPagina - 1) * itensPorPagina, itensPorPagina);

      console.log('ACTION ADICIONAR TAREFA\n--------------------\nPagina atual: ' + paginaAtual +
        '\nTotal de itens: ' + totalItens + '\nNova Pagina: ' + novaPagina);

      return {
        ...state,
        paginaAtual: novaPagina,
        itensPorPagina,
        totalItens,
        tarefas: listarTarefas,
      };

    case REMOVER_TAREFA:
      const { id } = action.payload;

      // Filtra a lista de tarefas no localStage excluindo uma tarefa
      listarTarefas = listarTarefas.filter(tarefa => tarefa.id !== id);

      // Salava no localStorage a lista de tarefas
      localStorage['tarefas'] = JSON.stringify(listarTarefas);

      if (tarefas.length === 1) {
        novaPagina = paginaAtual - 1;
        listarTarefas = listarTarefas.splice((novaPagina - 1) * itensPorPagina, itensPorPagina);
      } else {
        listarTarefas = listarTarefas.splice((paginaAtual - 1) * itensPorPagina, itensPorPagina);

      }


      console.log('ACTION REMOVER TAREFA\n--------------------\nPagina atual: ' + paginaAtual +
        '\nTotal de itens: ' + totalItens);

      return {
        ...state,
        paginaAtual: novaPagina,
        itensPorPagina,
        totalItens,
        tarefas: listarTarefas,
      };
    default:
      return state;
  }
};
