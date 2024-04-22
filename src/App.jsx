

import './App.css'
import Encabezado from './components/Encabezado/Encabezado'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import BottonCantidad from './components/Botton2/BottonCantidad'


function App() {
  

  return (
   <div className="contenido">
    <Encabezado></Encabezado>

    <Card></Card>
    <BottonCantidad></BottonCantidad>
     <Button>Agregar</Button> 
     <Button>Eliminar</Button> 
     <Button>Editar</Button> 
    
   
     
    </div>
  )
}

export default App
