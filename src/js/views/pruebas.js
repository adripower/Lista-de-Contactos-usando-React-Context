
import React, {useInsertionEffect, useState,Component }from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



//------------aqui la API.
export const CreateUser = (nuevoContacto)=>{
	fetch('https://playground.4geeks.com/apis/fake/contact',{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
			
		},
		body: JSON.stringify({
			nombre:nuevoContacto.nombre,
			email:nuevoContacto.email,
			direccion:nuevoContacto,direccion,
			telefono:nuevoContacto.telefono

		})
	})
		.then((respuesta)=>respuesta.json())
		.then((data)=>console.log(data))
		.catch(error => console.log(error))

	}
