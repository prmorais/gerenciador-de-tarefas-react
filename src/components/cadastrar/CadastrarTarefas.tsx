import { A, navigate } from 'hookrouter';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap';

const CadastrarTarefas: React.FC = () => {

  const [tarefa, setTarefa] = useState('');
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  const cadastrar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  const handleTextTarefa = (event: ChangeEvent<HTMLInputElement>) => {
    setTarefa(event.target.value);
  };

  const handleFecharModal = () => {
    setExibirModal(false);
    navigate('/');
  };

  return (
    <div>
      <h3 className="text-center">Cadastrar</h3>
      <Jumbotron>
        <Form validated={formValidado} noValidate onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefas</Form.Label>
            <Form.Control
              value={tarefa}
              onChange={handleTextTarefa}
              type="text"
              placeholder="Digite uma tarefa"
              minLength={5}
              maxLength={100}
              required
            />

            <Form.Control.Feedback type="invalid" >
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="text-center" >
            <Button
              variant="success"
              type="submit"
            >
              Cadastrar
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">Voltar</A>
          </Form.Group>
        </Form>

        <Modal show={exibirModal} onHide={handleFecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Tarefa adicionada com sucesso!
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleFecharModal} variant="success">Continuar</Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
};

export default CadastrarTarefas;
