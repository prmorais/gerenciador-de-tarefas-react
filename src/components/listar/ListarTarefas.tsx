import { useEffect, useState } from 'react';
import { A } from 'hookrouter';

import { Table } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemListaTarefas from './ItemListaTarefas';

type TTarefa = {
  id: number,
  nome: string,
  concluida: boolean,
}

const ListarTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<TTarefa[]>([]);

  useEffect(() => {
    obterTarefas();
  }, []);

  const obterTarefas = () => {
    const tarefasDb = localStorage['tarefas'];
    let listarTarefas: TTarefa[] = tarefasDb ? JSON.parse(tarefasDb) : [];
    setTarefas(listarTarefas);
    // console.log(listarTarefas);
  };

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
    </div>
  );
};

export default ListarTarefas;
