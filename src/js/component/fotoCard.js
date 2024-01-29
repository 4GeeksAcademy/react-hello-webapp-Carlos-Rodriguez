import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const FotoCard = ({ contact }) => {

  const { store, actions } = useContext(Context);

  return (
    <div className="card mb-3" id="Cards1" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://loremflickr.com/500/400/person" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 ml-6">
          <div className="card-body">
          <div className="name fs-3"><strong>{contact.full_name}</strong></div>
                    <div className="address">
                        <i className="fas fa-map-marker-alt p-2" />
                        {contact.address}
                    </div>
                    <div className="phone">
                        <i className="fas fa-phone p-2" />
                        {contact.phone}
                    </div>
                    <div className="email">
                        <i className="fas fa-envelope p-2" />
                        {contact.email}
                    </div>
            <div id="botones1" className="position-relative"> <button><i className="fas fa-pencil-alt"></i></button> <button> <i className="fas fa-trash"></i></button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
