import React, { Component } from "react";


export const Formulario1 = () => (

    <div> 
        <form>
  <div className="form-group">
    <label for="formGroupExampleInput">Full Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
  </div>
  <div className="form-group mt-3">
    <label for="formGroupExampleInput2">Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email"/>
  </div>
</form>
<form>
  <div className="form-group mt-3">
    <label for="formGroupExampleInput">Phone</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Phone"/>
  </div>
  <div className="form-group mt-3">
    <label for="formGroupExampleInput2">Address</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Address"/>
  </div>
</form>
<button type="submit" id="button2" class="btn btn-primary mt-5">Sign in</button>
    </div>);