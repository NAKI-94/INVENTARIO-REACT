import Input from "../Input/Input"
import "./Card.css"

export default function  Card (){
    return (
         
    <div className="card">
        <h2>Ingresa el Producto</h2>
          
          <Input>NOMBRE DEL PRODUCTO</Input>
          <Input>DESCRIPCION</Input>
          <Input>VALOR </Input>
          

    </div>
         
         


    )

};