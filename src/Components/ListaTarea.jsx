import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({ListadoTareasProp, borrarTarea}) => {
    return (
        <ListGroup>
        {
            ListadoTareasProp.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
        }
      </ListGroup>
    );
};

export default ListaTarea;