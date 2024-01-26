import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const FotoCard = () => {

  const { store, actions } = useContext(Context);

  const usuarios = store.usuarios

  console.log(usuarios)

  return (
    <div className="card mb-3" id="Cards1" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://loremflickr.com/500/400/person" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 ml-6">
          <div className="card-body">
            <ul>
              {store.usuarios.map(u => (
                <li key={u.name} >
                  <div> Nombre: {u.name} </div>
                  <div> Email: {u.email} </div>
                  <div> Phone: {u.phone} </div>
                  <div> Address: {u.address} </div>
                </li>
              ))}
            </ul>
            <div id="botones1" className="position-relative"> <button><i className="fas fa-pencil-alt"></i></button> <button> <i className="fas fa-trash"></i></button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
