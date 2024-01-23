import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

import { Formulario1 } from "../component/Formulario.jsx";

export const Formulario2 = () => {
    const { store, actions } = useContext(Context);
    const { contacts, setContacts } = useState([])

    return (
        <div className="container">

            <Formulario1 />

        </div>
    );
};
