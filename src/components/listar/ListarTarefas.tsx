import { useEffect, useState } from 'react';
import { A } from 'hookrouter';

import { Table } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemListaTarefas from './ItemListaTarefas';
import Paginacao from './paginacao/Paginacao';

type TTarefa = {
  id: number,
  nome: string,
  concluida: boolean,
}

const ListarTarefas: React.FC = () => {
  const ITENS_POR_PAG = 3;

  const [tarefas, setTarefas] = useState<TTarefa[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);

  const obterTarefas = () => {
    const tarefasDb = localStorage['tarefas'];
    let listarTarefas: TTarefa[] = tarefasDb ? JSON.parse(tarefasDb) : [];
    setTotalItems(listarTarefas.length);
    setTarefas(listarTarefas.splice((paginaAtual - 1) * ITENS_POR_PAG, ITENS_POR_PAG));
  };

  const handleMudarPagina = (pagina: number) => {
    obterTarefas();
    setPaginaAtual(pagina);
  };

  useEffect(() => {
    obterTarefas();
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
          <ItemListaTarefas
            arrayTarefas={tarefas}
            setTarefas={setTarefas}
          />
        </tbody>
      </Table>

      <Paginacao
        totalItems={totalItems}
        itemsPorPagina={ITENS_POR_PAG}
        paginaAtual={paginaAtual}
        mudarPagina={handleMudarPagina}
      />
    </div>
  );
};

export default ListarTarefas;
