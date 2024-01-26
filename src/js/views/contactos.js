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

            
                {store.usuarios.map(u => (
                    <li key={u.name} >
                        <FotoCard key={u.name} />
                    </li>
                   
                    

                ))}

           


        </div>
    );
};
