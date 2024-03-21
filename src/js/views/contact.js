import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Contact = () => (
  <><div className="d-grid gap-2 d-md-flex justify-content-md-end m-3">
    
 
    <Link to="/addcontact" className="btn btn-success" >   esta si vale biennnnn   </Link>

  </div><div className="card mb-3">

    
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Nombre usuario</h5>
            <p className="card-text">Direccion.</p>
            <p className="card-text">telefono.</p>
            
            <p className="card-text"><small className="text-body-secondary">correo@aqui.va</small></p>
          </div>

        </div>
      </div>


    
    </div></>

 );
  

