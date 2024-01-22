import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

import { FotoCard } from "../component/fotoCard.jsx";

export const Contactos = () => {
    const { store, actions } = useContext(Context);
    const { contacts, setContacts } = useState([])

    return (
        <div className="container">

            
            <FotoCard />
            <FotoCard />
            <FotoCard />
            <FotoCard />
            <FotoCard />

        </div>
    );
};
