import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { A, navigate } from 'hookrouter';

import { Button, Form, Jumbotron, Modal } from 'react-bootstrap';

import { GlobalContext } from '../../context/GlobalState';

const CadastrarTarefas: React.FC = () => {

  const { handleTextTarefa } = useContext(GlobalContext);

  const [nome, setNome] = useState('');

  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  const cadastrar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValidado(true);

    if (event.currentTarget.checkValidity() === true) {
      handleTextTarefa(nome);

      // Exibe o modal de confirmação
      setExibirModal(true);
    }

  };
  const onChangeNome = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
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
              value={nome}
              name="nome"
              onChange={onChangeNome}
              type="text"
              placeholder="Digite uma tarefa"
              minLength={5}
              maxLength={100}
              required
              data-testid="txt-tarefa"
            />

            <Form.Control.Feedback type="invalid" >
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="text-center" >
            <Button
              variant="success"
              type="submit"
              data-testid="btn-cadastrar"
            >
              Cadastrar
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">Voltar</A>
          </Form.Group>
        </Form>

        <Modal
          show={exibirModal}
          onHide={handleFecharModal}
          data-testid="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p><strong>{nome}</strong> adicionada com sucesso!</p>
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
