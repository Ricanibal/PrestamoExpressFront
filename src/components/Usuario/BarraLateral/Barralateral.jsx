import React from "react";
import './css/BarraLateral.css'
import { Link } from "react-router-dom";
import imgSolicitud from './img/dinero.png'
import imgProducto from './img/Productos.png'
import imgHistorial from './img/reloj.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";

const BarraLateral = (Props) =>
{
    return (<>
    <div className="d-flex flex-column justify-content-center align-items-center h-75">
        <Link to='/usuario/solicitudprestamo' className="text-light selecccionBarra btn d-flex "> 
                <img src={imgSolicitud} className="imgUsuario" /> <p className="mt-2">Solicitud de Prestamo </p> 
        </Link >
        <Link to = "/usuario/pagoprestamo"className="text-light selecccionBarra btn d-flex">
                <img src={imgProducto} className="imgUsuario" /> <p className="mt-2">Forma de pago</p>
        </Link>
        <Link to = '/usuario/historialPrestamos' className="text-light selecccionBarra btn d-flex" >
                <img src={imgHistorial} className="imgUsuario" /> <p className="mt-2">Historial</p>
        </Link>
   </div>
    </>
    
   )
};

export default BarraLateral