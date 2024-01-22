import React, { Component } from "react";

export const FotoCard = () => (
	<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="position-absolute top-0 start-100 translate-middle"><i className="d-flex fas fa-trash"></i></div>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
);


