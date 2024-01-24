import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const FotoCard = () => {

  const { store, actions } = useContext(Context);

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
                <li> <strong> Nombre: {u.name} </strong> </li>,
                <li> Email: {u.email} </li>,
                <li> Phone: {u.phone} </li>,
                <li> Address: {u.address} </li>
              ))}
              
            </ul>
            <div id="botones1" className="position-relative"> <button><i className="fas fa-pencil-alt"></i></button> <button> <i className="fas fa-trash"></i></button></div>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
