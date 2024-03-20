import React, { Component } from "react";

export const Contact = () => {
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
          />
          <div id="emailHelp" className="form-text">
           
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="d-grid ">
             <button className="btn btn-primary" type="button">Button</button>
  
            </div>
      </form>
    </div>
  );
};
