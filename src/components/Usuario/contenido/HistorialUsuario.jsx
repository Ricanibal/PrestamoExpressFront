import React, { useEffect, useState } from "react";
import axios from "axios";

//Importaciones estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/HistorialUsuario.css";

const Historial = (Props) => {
  const [prestamo, setPrestamo] = useState(null);
  const urlprestamo = "http://127.0.0.1:8000/prestamoscliente/" + Props.id;
  const [roles, setRoles] = useState(null);
  const urlroles = "http://127.0.0.1:8000/tiposprestamo";
  console.log(Props.id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const responsePrestamo = await axios.get(urlprestamo);
        setPrestamo(responsePrestamo.data);
        const response = await axios.get(urlroles);
        setRoles(response.data);
      } catch (e) {
        console.error("Error fetching data: ", e);
      }
    };
    fetchData();
  }, []);
  console.log(prestamo);
  if (prestamo == null || roles == null) {
    return <p>no ha cargado</p>;
  }
  function Estadoprestamo(numero)
  {
    return numero == 1 ? "Activo" : (numero == 3 ? "Pagado" : "Mora")
  }
  function EstadoprestamoEstilo(numero)
  {
    let estiloconstante = "text-center text-white border border-success rounded-pill"
    return numero == 1 ? "bg-primary " + estiloconstante : (numero == 3 ? "bg-success " + estiloconstante : " bg-Warning " + estiloconstante)
  }
  function Roles(rol)
  {
    return(roles.map(item =>{
      if(item.tipoprestamoid == rol)
      {
        return item.descripcion
      }
    }))
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <h2 className="text-center text-light tituloHisotialUsuario bg-secondary w-100">Historial</h2>
      <table className="table mytable table-hover table-borderless">
        <thead>
          <tr>
            <th className="col">Estado</th>
            <th className="col">Inicio</th>
            <th className="col">Finalizacion</th>
            <th className="col">Monto</th>
            <th className="col">Cuotas</th>
            <th className="col">Valor cuota</th>
            <th className="col">Catogoria</th>
          </tr>
         
        </thead> 
        <tbody>
            
              {prestamo.map((item,index) =>
              (
                <tr key = {index} >
                <td > <p className={EstadoprestamoEstilo(item.estadoid)}>{Estadoprestamo(item.estadoid)}</p></td>
                <td>{item.fechaprestamo}</td>
                <td>{item.fechaestimadapago}</td>
                <td>{item.monto.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                <td>{item.cuotas}</td>
                <td>{item.valorcuota.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                <td>{Roles(item.tipoprestamoid)}</td>
                </tr> 
              ))}
            
         </tbody>
      </table>
    </div>
      

  );
};

export default Historial;
