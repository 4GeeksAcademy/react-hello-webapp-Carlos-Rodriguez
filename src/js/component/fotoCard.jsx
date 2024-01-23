import React, { Component } from "react";

export const FotoCard = () => (
	<div className="card mb-3" id="Cards1" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://loremflickr.com/500/400/person" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 ml-6">
      <div className="card-body">
        <h3 className="card-title">Jose Perez</h3>
        <p> <i class="fas fa-map-marker-alt"></i> 17th Street Aevenue, Old Town road</p>
        <p className="card-text"> <i class="fas fa-phone"></i> +1 155 671 657654</p>
        <p><i class="far fa-envelope"></i> JoseRamon@gmail.com</p>
        <div id="botones1" className="position-relative"> <button><i className="fas fa-pencil-alt"></i></button> <button> <i className="fas fa-trash"></i></button></div>
        <p className="card-text"><small className="text-muted"></small></p>
      </div>
    </div>
  </div>
</div>
);


