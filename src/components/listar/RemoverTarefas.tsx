import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

type TTarefa = {
  id: number,
  nome: string,
  concluida: boolean,
}

type TRemoverTarefa = {
  tarefaProps: TTarefa,
  setTarefas: Dispatch<SetStateAction<TTarefa[]>>,
}

const RemoverTarefas: React.FC<TRemoverTarefa> = ({ tarefaProps, setTarefas }) => {
  const [exibirModal, setExibirModal] = useState(false);

  const handleAbrirModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setExibirModal(true);
  };

  const handleFecharModal = () => {
    setExibirModal(false);
  };

  const handleRemoverTarefa = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Obtem as tarefas
    const tarefasDb: TTarefa[] = localStorage['tarefas'];
    let tarefasArray: TTarefa[] = tarefasDb ? JSON.parse(tarefasDb.toString()) : [];

    tarefasArray = tarefasArray.filter(tarefa => tarefa.id !== tarefaProps.id);

    localStorage['tarefas'] = JSON.stringify(tarefasArray);
    setTarefas(tarefasArray);
    setExibirModal(false);
  };

  return (
    <>
      <Button
        variant="danger"
        className="btn-sm"
        onClick={handleAbrirModal}
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>

      <Modal
        show={exibirModal}
        onHide={handleFecharModal}
        data-testid="modal"
      >
        <Modal.Header style={{ backgroundColor: '#0347' }}>
          <Modal.Title>Remover tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja remover a tarefa
          <br />
          <strong>{tarefaProps.nome}?</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleRemoverTarefa}
            data-testid="btn-remover-tarefa"
          >
            Sim
          </Button>

          <Button
            variant="light"
            onClick={handleFecharModal}
            data-testid="btn-fechar-modal"
          >
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoverTarefas;
