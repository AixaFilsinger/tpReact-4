
import {Form, Button} from 'react-bootstrap'
import ListaTarea from './ListaTarea';
import { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [listadoTareas, setListadoTareas] = useState([]);

    // aqui creo mis funciones
    const handleSubmit = (e)=>{
      e.preventDefault();
      setListadoTareas([...listadoTareas, tarea])
     setTarea('');
     
    }

    const borrarTarea = (nombreTarea)=>{
        let arregloFiltrado = listadoTareas.filter((item)=> item !== nombreTarea)
        setListadoTareas(arregloFiltrado);
    }
    return (
        <section>
             <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 d-flex" controlId="tarea">
              <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value) }
               value={tarea} />
              <Button variant="primary" type="submit">
                 Enviar
             </Button> 
      </Form.Group>
    </Form>
    <ListaTarea ListadoTareasProp={listadoTareas} borrarTarea={borrarTarea}></ListaTarea>
        </section>
       
    );
};

export default Formulario;