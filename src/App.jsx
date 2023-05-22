
import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Components/Formulario';

function App() {
  

  return (
    <>
     <Container className="my-5 mainPage">
      <h1 className='dispkay-4 text-center text-light'>Lista de tareas</h1>
     <hr className='text-light'/>
     <Formulario></Formulario>
     </Container>
     
    
     <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
