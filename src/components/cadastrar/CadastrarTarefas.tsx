import { A } from 'hookrouter';
import React from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap';

const CadastrarTarefas: React.FC = () => {
  return (
    <div>
      <h3 className="text-center">Cadastrar</h3>
      <Jumbotron>
        <Form>
          <Form.Group>
            <Form.Label>Tarefas</Form.Label>
            <Form.Control
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
      </Jumbotron>
    </div>
  );
};

export default CadastrarTarefas;
