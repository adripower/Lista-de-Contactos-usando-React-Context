import React, { Component } from "react";
import { Link } from "react-router-dom";


export const AddContact = () => {



  
const handleSubmit = (e) =>{                     {/* creamos una consta handleSumit con un evento (e) le añadimos preventDefault para que lo mande pero no recargue */}
  e.preventDefault();
  console.log("enviar");                         {/*creamos un console.log("enviar") solo para verificar que funciona*/}

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


 {/* - indicamos typo=submit para que mande el formmulario 
     - añadimos un onSubmit que llama a la funcion handleSubmit  
     - creamos una consta handleSumit con un evento (e) le añadimos preventDefault para que lo mande pero no recargue 
     - creamos un console.log("enviar") solo para verificar que funciona





*/}