import Tarefa from '../models/Tarefa.model';
import {
  ADICIONAR_TAREFA,
  CONCLUIR_TAREFA,
  initialState,
  InitialStateType,
  // ListAction,
  MUDAR_PAGINA,
  REMOVER_TAREFA,
  TarefaAction,
  TarefaType,
} from './types/ContextTypes';

export const AppReducer = (state = initialState, action: TarefaAction): InitialStateType => {
  // Obtém as variáves do state com destructor
  const { itensPorPagina, paginaAtual, tarefas } = state;

  // Acessa o localStorage e pega a lista de tarefas
  const tarefasDb: TarefaType[] = localStorage['tarefas'];
  let listarTarefas: TarefaType[] = tarefasDb ? JSON.parse(tarefasDb.toString()) : [];

  // Cria a variável totalItens e atribui a ela o tamanho da lista de tarefas do localStorage
  let totalItens = listarTarefas.length;

  // Cria a variável novaPagina e atribui a ela o valor da página atual
  let novaPagina = paginaAtual;

  // Cria a variável numPaginas e atribui zero
  let numPaginas = 0;

  // Método de calcula e retorna o número de páginas
  const calculaNumPagina = (itens: number): number => {
    return Math.ceil(totalItens / itensPorPagina);
  };

  switch (action.type) {
    case MUDAR_PAGINA:
      const { pagina } = action;

      // Se o parâmetro pagina que vem na action for diferente de nulo ou undefined
      if (pagina) {

        // Aplica a paginação usuando o valor do parâmetro pagina
        listarTarefas = listarTarefas.splice((pagina - 1) * itensPorPagina, itensPorPagina);
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
        const { id } = action;

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
      const { nome } = action;

      if (nome) {
        // Cria uma nova tarefa
        const novaTarefa = new Tarefa(new Date().getTime(), nome, false);

        // Adiciona a tarefa criada ao array listarTarefas
        listarTarefas.push(novaTarefa);

        // Salva o array no localStorage
        localStorage['tarefas'] = JSON.stringify(listarTarefas);

        // Atualiza o total de itens
        totalItens = listarTarefas.length;

        // Recalcula no numero de páginas
        numPaginas = calculaNumPagina(totalItens);

        // Atribui a novaPagina o novo numero de paginas
        novaPagina = numPaginas;
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
      const id_remover = action.id;

      // Filtra a lista de tarefas no localStage excluindo uma tarefa
      listarTarefas = listarTarefas.filter(tarefa => tarefa.id !== id_remover);

      // Salava no localStorage a lista de tarefas
      localStorage['tarefas'] = JSON.stringify(listarTarefas);

      // Atualiza o total de itens
      totalItens = listarTarefas.length;

      // Recalcula no numero de páginas
      numPaginas = calculaNumPagina(totalItens);

      // Atribui a novaPagina o novo numero de paginas
      novaPagina = calculaNumPagina(listarTarefas.length);


      // Se o array tarefas no state for igual a 3, que é o valor padrão do itensPorPagina
      if (tarefas.length === itensPorPagina) {

        // Atribui a variável novaPagina o valor da constante paginaAtual que está no state
        novaPagina = paginaAtual;
      }
      else {

        // Se não, atribui a variável novaPagina o valor da variável numPáginas
        novaPagina = numPaginas;
      }

      // Aplica a paginação
      listarTarefas = listarTarefas.splice((novaPagina - 1) * itensPorPagina, itensPorPagina);

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
