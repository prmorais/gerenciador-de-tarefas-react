import { MouseEvent, useContext, useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GlobalContext } from '../../context/GlobalState';

type TTarefa = {
  id: number,
  nome: string,
  concluida: boolean,
}

type TConcluirTarefa = {
  tarefa: TTarefa,
  className?: string,
}

const ConcluirTarefa: React.FC<TConcluirTarefa> = ({ tarefa, className }) => {

  const { concluirTarefa } = useContext(GlobalContext);

  const [exibirModal, setExibirModal] = useState(false);

  const handleAbrirModal = (event: MouseEvent) => {
    event.preventDefault();
    setExibirModal(true);
  };

  return (
    <span className={className}>
      <Button
        onClick={handleAbrirModal}
        className="btn-sm"
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Button>

      <Modal
        show={exibirModal}
        onHide={() => setExibirModal(false)}
        data-testid="modal"
      >
        <Modal.Header>
          <Modal.Title>Concluir tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Confirma a conclusão da tarefa:
          <br />
          <strong>{tarefa.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              concluirTarefa(tarefa.id);
              setExibirModal(false);
            }
            }
            data-testid="btn-concluir-tarefa"
          >
            Sim
          </Button>

          <Button
            variant="light"
            onClick={() => setExibirModal(false)}
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
