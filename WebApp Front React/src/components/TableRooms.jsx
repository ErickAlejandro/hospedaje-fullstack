import React, { useState, useEffect } from "react";
import axios from "axios";
import SweetAlert from 'react-bootstrap-sweetalert';

const TableRooms = () => {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Función para cargar los datos cuando el componente se monte
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.17:3200/rooms');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Arreglo de dependencias vacío para ejecutar el efecto solo una vez

  const handleButtonClick = (roomId) => {
    console.log("Button clicked for Room ID:", roomId);
    if (roomId) {
        axios
          .put(
            `http://192.168.1.17:3200/rooms/${roomId}`,
            JSON.stringify({idState:1}),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("Change State successful!");
            setShowAlert(true); // Mostrar la alerta cuando la solicitud PUT sea exitosa
          })
          .catch((error) => {
            console.error("Error sending form data:", error);
          });
      }
  };

  const hideAlert = () => {
    setShowAlert(false);
    window.location.reload();
  };

  return (
    <div className="container mt-4">
      <h3>Lista de Habitaciones</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Habitacion N°</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.NumberRoom}</td>
              <td>{item.NameState}</td>
              <td>
                {item.idState !== 1 &&
                  <button
                    className="btn btn-primary"
                    onClick={() => handleButtonClick(item.id)}
                  >
                    Desocupar
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SweetAlert
        success
        show={showAlert}
        title="Form Data Submitted"
        onConfirm={hideAlert}
      >
        Your form data has been successfully submitted to the API.
      </SweetAlert>
    </div>
  );
};

export default TableRooms;
