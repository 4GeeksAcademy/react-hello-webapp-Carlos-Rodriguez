import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Formulario1 = () => {

  const {store, actions} = useContext(Context);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  


  return (

    <div> 
        <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Full Name</label>
    <input type="text" onChange={(e)=> setName(e.target.value)} className="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
  </div>
  <div className="form-group mt-3">
    <label htmlFor="formGroupExampleInput2">Email</label>
    <input type="email" onChange={(e)=> setEmail(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="Email"/>
  </div>
</form>
<form>
  <div className="form-group mt-3">
    <label htmlFor="formGroupExampleInput">Phone</label>
    <input type="text" onChange={(e)=> setPhone(e.target.value)} className="form-control" id="formGroupExampleInput" placeholder="Phone"/>
  </div>
  <div className="form-group mt-3">
    <label htmlFor="formGroupExampleInput2">Address</label>
    <input type="text" onChange={(e)=> setAddress(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="Address"/>
  </div>
</form>
<button type="submit" id="button2" onClick={() => actions.crearUsuario(name,email,phone,address)} className="btn btn-primary mt-5">Save</button>
<Link to="/contactos"><button className="btn btn-secondary mt-5">Take me to contacts</button></Link>
<h1> usuarios nuevos : {store.usuarios.length}</h1>
    </div>
    );
    
}