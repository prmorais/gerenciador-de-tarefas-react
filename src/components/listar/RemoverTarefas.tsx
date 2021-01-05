import { MouseEvent, useContext, useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GlobalContext } from '../../context/GlobalState';

interface ITarefa {
  id: number,
  nome: string,
  concluida: boolean,
}

type TRemoverTarefa = {
  tarefaProps: ITarefa,
}

const RemoverTarefas: React.FC<TRemoverTarefa> = ({ tarefaProps }) => {

  const { removerTarefa } = useContext(GlobalContext);
  const [exibirModal, setExibirModal] = useState(false);

  const handleAbrirModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setExibirModal(true);
  };

  const handleFecharModal = () => {
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
            onClick={() => {
              removerTarefa(tarefaProps.id);
              setExibirModal(false);
            }}
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
