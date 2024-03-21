import React, { Component, useState } from "react";
import { Link } from "react-router-dom";




export const AddContact = () => {


  const [nombre, setNombre] = useState("");         {/*creamos una constate con los estados para poder llamarlos */}
  const [email, setEmail] = useState("");
  const [telefono, setTelefono]= useState("");
  const [direccion, setDireccion]= useState("");




  
const handleSubmit = (e) =>{                     {/* creamos una consta handleSumit con un evento (e) le añadimos preventDefault para que lo mande pero no recargue */}
  e.preventDefault();
  console.log("enviar", {nombre, email, telefono, direccion});        {/* creamos un console.log("enviar") solo para verificar que funciona*/}

}

const handleNombre =(e)=>{                        {/* creamos una cosnt de handleNombre , con el evento (e) que guarda en setNombrey e guarda el value */}
  setNombre(e.target.value);    
  console.log(e.target.value);                    {/* el console.log es solo para verificar  */}

}
const handleEmail=(e)=>{
  setEmail(e.target.value);
  console.log(e.target.value);
}
const handleTelefono=(e)=>{
  setTelefono(e.target.value);
}
const handleDirecion=(e)=>{
  setDireccion(e.target.value);
}



  return (



    <div className="container">
      <h1 className="text-center">Add a new contact</h1>

      <form className="formulario" onSubmit={handleSubmit} >  {/*aqui añadimos un onSubmit que llama a la funcion handleSubmit   */}

        <div className="mb-3">
          <label for="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="textName"
            aria-describedby="FullName"
            placeholder="Pon aqui tu Nombre completo"
            value={nombre}     /*creamos value=nombre para que cambie el estado que asignamos */
            onChange={handleNombre}   /*creamos onChange para capturar los cambios que se realizen */
          />
        </div>


        <div className="mb-3">
          <label for="InputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            placeholder="Pon aqui tu Email"
            value={email}
            onChange={handleEmail}
          />
        </div>


        <div className="mb-3">
          <label for="InputTelefono" className="form-label">
           Telefono
           </label>
           <input
           type="text"
           className="form-control"
           id="InputTelefono"
           placeholder="Pon aqui tu numero de Telefono"
           value={telefono}
           onChange={handleTelefono}
          />
        </div>


        <div className="mb-3">
          <label for="InputDireccion" className="form-label">
          Direccion
          </label>
          <input
          type="text"
          className="form-control"
          id="InputDireccion"
          placeholder="Pon aqui tu Direccion"
          value={direccion}
          onChange={handleDirecion}
        />
      </div>
       
        <div className="d-grid ">
           
  <Link to="/" className="btn btn-primary" >   esto te manda a la pagina principal es una prueba   </Link>
  <br></br>
  <button className="btn btn-primary" type="submit">Enviar formulario .. en desarrollo</button>    {/*  indicamos typo=submit para que mande el formmulario */}
            </div>
      </form>
    </div>
  );
};


 /*  - indicamos typo=submit para que mande el formmulario 
     - añadimos un onSubmit que llama a la funcion handleSubmit  
     - creamos una consta handleSumit con un evento (e) le añadimos preventDefault para que lo mande pero no recargue 
     - creamos un console.log("enviar") solo para verificar que funciona
     - creamos una constate con los estados para poder llamarlos 
     - creamos value=nombre para que cambie el estado que asignamos 
     - creamos onChange para capturar los cambios que se realizen
     - creamos una cosnt de handleNombre , con el evento (e) que guarda en setNombrey e guarda el value 
     - 





*/