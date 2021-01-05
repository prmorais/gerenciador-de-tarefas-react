import { useContext, useEffect } from 'react';

import { A } from 'hookrouter';

import { Table } from 'react-bootstrap';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GlobalContext } from '../../context/GlobalState';

import ItemListaTarefas from './ItemListaTarefas';
import Paginacao from './paginacao/Paginacao';

const ListarTarefas: React.FC = () => {

  const { state, handleMudarPagina } = useContext(GlobalContext);
  const { paginaAtual } = state;

  useEffect(() => {
    handleMudarPagina(paginaAtual);
  }, [paginaAtual]);


  return (
    <div className="text-center">
      <h3>Tarefas a cumprir</h3>
      <Table
        striped
        bordered
        hover
        responsive
        data-testid="tabela"
      >
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <A href="/cadastrar"
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa"
              >
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;
                Nova tarefa
              </A>
            </th>
          </tr>
        </thead>
        <tbody>
          <ItemListaTarefas />
        </tbody>
      </Table>

      <Paginacao />
    </div>
  );
};

export default ListarTarefas;
