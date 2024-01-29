import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FotoCard } from "../component/fotoCard.js";

import { Context } from "../store/appContext";

export const Contacto = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Cantidad de contactos: {store.contactos.length}</h1>
            <ul>
                {store.contactos.map((contact, index) => 
                    (
                        <li className="row contact" key={index}>
                            <FotoCard contact={contact} />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};