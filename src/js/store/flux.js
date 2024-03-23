import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
/**  aqui trae de la de la views */
      createContact: (nombre, email, telefono, direccion) => {
        console.log(nombre, email, telefono, direccion);

fetch("https://playground.4geeks.com/apis/fake/contact/"),{
  method: "POST",
  body: JSON.stringify(
    {
      "full_name": nombre,
      "email": email,
    
      "address":direccion,
      "phone":telefono
    }
  ),
  Headers:{
    "content-type":"application/json"
  }

}.then((response)=>{
  return response.json()
})
  .then((data)=>{
    console.log(data);
  })
  .cattch((error)=>{
    console.log(error)
  })

      },




      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
