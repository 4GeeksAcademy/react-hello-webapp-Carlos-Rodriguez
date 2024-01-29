import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Formulario = () => {

    const { store, actions } = useContext(Context);
    const [data, setData] = useState({
        agenda_slug: "carlosR"
    });
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        actions.añadirContact(data)
    }
    


return (

    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Full Name</label>
                <input type="text" onChange={(e) => handleChange(e)} className="form-control" id="formGroupExampleInput" placeholder="Full Name" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="formGroupExampleInput2">Email</label>
                <input type="email" onChange={(e) => handleChange(e)} className="form-control" id="formGroupExampleInput2" placeholder="Email" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="formGroupExampleInput">Phone</label>
                <input type="text" onChange={(e) => handleChange(e)} className="form-control" id="formGroupExampleInput" placeholder="Phone" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="formGroupExampleInput2">Address</label>
                <input type="text" onChange={(e) => handleChange(e)} className="form-control" id="formGroupExampleInput2" placeholder="Address" />
            </div>
            <button type="submit" id="button2" className="btn btn-primary mt-5">Save</button>
        </form>
       
        <Link to="/contactos"><button className="btn btn-secondary mt-5">Take me to contacts</button></Link>
    </div>
);
    
}
