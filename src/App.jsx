
import { Container } from 'postcss';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Components/Formulario';

function App() {
  

  return (
    <>
     <Container className="my-5 mainPage">
      <h1 className='dispkay-4 text-center text-light'>Lista de tareas</h1>
     <hr className='text-light'/>
     </Container>
     <Formulario></Formulario>
    
    <footer className='bg-dark'>
          &copy Todos los derechos reservados
    </footer>
    </>
  )
}

export default App
