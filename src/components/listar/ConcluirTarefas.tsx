import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap';

type TTarefa = {
  id: number,
  nome: string,
  concluida: boolean,
}

type TConcluirTarefa = {
  tarefa: TTarefa,
  className?: string,
  setTarefas: Dispatch<SetStateAction<TTarefa[]>>,
}

const ConcluirTarefa: React.FC<TConcluirTarefa> = (props) => {

  const [exibirModal, setExibirModal] = useState(false);

  const handleAbrirModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setExibirModal(true);
  };

  const handleFecharModal = () => {
    setExibirModal(false);
  };

  const handleConcluirTarefa = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Obtem as tarefas
    const tarefasDb: TTarefa[] = localStorage['tarefas'];
    let tarefasArray: TTarefa[] = tarefasDb ? JSON.parse(tarefasDb.toString()) : [];

    tarefasArray.map(tarefa => {
      if (tarefa.id === props.tarefa.id) {
        tarefa.concluida = true;
      }
      return tarefasArray;
    });

    localStorage['tarefas'] = JSON.stringify(tarefasArray);
    props.setTarefas(tarefasArray);
    setExibirModal(false);
  };

  return (
    <span className={props.className}>
      <Button
        onClick={handleAbrirModal}
        className="btn-sm"
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Button>

      <Modal
        show={exibirModal}
        onHide={handleFecharModal}
        data-testid="modal"
      >
        <Modal.Header>
          <Modal.Title>Concluir tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Confirma a conclusão da tarefa:
          <br />
          <strong>{props.tarefa.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleConcluirTarefa}
            data-testid="btn-concluir-tarefa"
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
    </span>
  );
};

export default ConcluirTarefa;
