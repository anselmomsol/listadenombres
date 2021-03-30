import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const obtenerUsuarios = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const user = await res.data;
        setUsuarios(user)
    }

    useEffect(() => {
        obtenerUsuarios()
    }, [])

    return (
        <div>
            <h2>Lista de usuarios</h2>
            {
                usuarios.map((item) => (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{item.username}</h6>
                                    <p className="card-text">{item.email}</p>
                                    <button className="btn btn-outline-dark">
                                        <Link to={`/usuario/${item.id}`}
                                            style={{ fontFamily: 'Bebas Neue', color: "black", fontSize: 20 }}
                                        >Más información</Link>
                                    </button>
                                </div>
                            </div>
                ))
            }
        </div>
    )
}



export default Usuarios;