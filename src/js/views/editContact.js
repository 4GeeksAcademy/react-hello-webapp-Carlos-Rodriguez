import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { func } from "prop-types";


export const EditarContacto = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate()
    const params = useParams();
    const [editcontactInfo, seteditcontactInfo] = useState({
        full_name: "",
        email: "",
        agenda_slug: "carlosR",
        address: "",
        phone: ""
    });

    useEffect(() => {
      let contacto =  store.contactos.find(c => c.id == params.id)
      seteditcontactInfo(contacto)
      
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        seteditcontactInfo({ ...editcontactInfo, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        function volveraContactos(){
            navigate('/contactos')
        }
        actions.editarUsuario(editcontactInfo, volveraContactos);
        // Redirect to the desired page after submission if needed
    };

    return (
        <div className="p-3 container">
            <form onSubmit={handleSubmit}>
                <h1 className="display-5 mb-4">Add a new contact</h1>
                <label htmlFor="full_name" className="form-label">Full Name</label>
                <input
                    className="form-control form-control-lg"
                    id="full_name"
                    type="text"
                    name="full_name"
                    defaultValue={editcontactInfo.full_name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    className="form-control form-control-lg"
                    id="email"
                    type="email"
                    name="email"
                    defaultValue={editcontactInfo.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="address" className="form-label">Address</label>
                <input
                    className="form-control form-control-lg"
                    id="address"
                    type="text"
                    name="address"
                    defaultValue={editcontactInfo.address}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                    className="form-control form-control-lg"
                    id="phone"
                    type="tel"
                    name="phone"
                    defaultValue={editcontactInfo.phone}
                    onChange={handleChange}
                    required
                />
                <div>
                    <button className="btn btn-info btn-lg mt-3" type="submit">Save</button>
                    
                </div>
            </form>
        </div>
    )}