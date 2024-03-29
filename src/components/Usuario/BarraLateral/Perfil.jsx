import React from "react";
import './css/BarraLateral.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import imgPerfil from './img/usuario-de-perfil.png'
const Perfil = (Props) =>
{
    let urlperfil = '/usuario/' + Props.id
    return(
        <Link to={urlperfil} className="text-light d-flex  align-items-center selecccionBarra btn"> 
            <img src={imgPerfil} className="imgPerfil" />
            <p className="PerfilNombre">{Props.name}</p>
        </Link>
    )
}

export default Perfil