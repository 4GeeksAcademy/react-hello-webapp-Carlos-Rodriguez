import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const editarContacto = () => {
    const { actions, store } = useContext(Context);
    const [editcontactInfo, seteditcontactInfo] = useState({
        full_name: "",
        email: "",
        agenda_slug: "carlosR",
        address: "",
        phone: ""
    });

    useEffect(() => {
        // Add any initialization logic if needed
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        seteditcontactInfo({ ...contactInfo, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        actions.editarContacto(editcontactInfo);
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
                    value={contactInfo.full_name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    className="form-control form-control-lg"
                    id="email"
                    type="email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="address" className="form-label">Address</label>
                <input
                    className="form-control form-control-lg"
                    id="address"
                    type="text"
                    name="address"
                    value={contactInfo.address}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                    className="form-control form-control-lg"
                    id="phone"
                    type="tel"
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleChange}
                    required
                />
                <div>
                    <button className="btn btn-info btn-lg mt-3" type="submit">Save</button>
                </div>
            </form>
        </div>
    )}