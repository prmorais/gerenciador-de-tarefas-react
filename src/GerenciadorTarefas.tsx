import { useRoutes } from 'hookrouter';
import AtualizarTarefas from './components/atualizar/AtualizarTarefas';

import CadastrarTarefas from './components/cadastrar/CadastrarTarefas';
import ListarTarefas from './components/listar/ListarTarefas';

import './GerenciadorTarefas.css';

// type TId = {
//   id?: number,
// }

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefas />,
  '/atualizar/:id': ({ id }: any) => <AtualizarTarefas id={id} />,
};

const GerenciadorTarefas = () => {
  return useRoutes(routes);
};

export default GerenciadorTarefas;
