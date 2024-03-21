import React, { Component } from "react";

export const AddContact = () => {
  return (
    <div className="container">
      <h1 className="text-center">Add a new contact</h1>
      <form>


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
             <button className="btn btn-primary" type="button">Button</button>
  
            </div>
      </form>
    </div>
  );
};
