import { MouseEvent, useState } from 'react';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap';

type TTarefa = {
  id: number,
  nome: string,
  concluida: boolean,
}

const ConcluirTarefa: React.FC<TTarefa> = ({ id, nome, concluida }) => {

  const [exibirModal, setExibirModal] = useState(false);

  const handleAbrirModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setExibirModal(true);
  };

  const handleFecharModal = () => {
    setExibirModal(false);
  };

  const handleConcluirTarefa = () => {

  };

  return (
    <span>
      <Button
        onClick={handleAbrirModal}
        className="btn-sm"
        data-testid="btn-abri-modal"
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
          <strong>{nome}</strong>
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
