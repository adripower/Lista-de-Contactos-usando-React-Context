
import React, {useInsertionEffect, useState,Component }from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



//------------aqui la API.
export const CreateUser = ()=>{
	fetch('https://playground.4geeks.com/apis/fake/todos/user/adri123',{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
			
		},
		body: JSON.stringify([])
	})
		.then((respuesta)=>respuesta.json())
		.then((data)=>console.log(data))
		.catch(error => console.log(error))

	}
