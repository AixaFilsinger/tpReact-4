
import {Form, Button} from 'react-bootstrap'
import ListaTarea from './ListaTarea';
const Formulario = () => {
    return (
        <section>
             <Form>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" />
      <Button variant="primary" type="submit">
        Enviar
      </Button> 
      </Form.Group>
    </Form>
    <ListaTarea></ListaTarea>
        </section>
       
    );
};

export default Formulario;