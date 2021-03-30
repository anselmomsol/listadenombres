import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link , useParams} from "react-router-dom";


const Usuario = () =>{

    const [usuario,setUsuario] = useState([]);
    const {id} = useParams()
    const obtenerUsuario = async() =>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await res.data;
        setUsuario(user)
    }

    useEffect( ()=>{
        obtenerUsuario()
    },[])


    return(
        <div>
            <h3 style={{ fontFamily: 'Bebas Neue'}}>USUARIO</h3>
            <p>Nombre: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <p>Telefono: {usuario.phone}</p>
            <p>Sitio web: {usuario.website}</p>   
        </div>
    )
}

export default Usuario;