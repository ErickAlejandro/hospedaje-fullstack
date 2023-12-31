import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/formRegister.css";
import SweetAlert from 'react-bootstrap-sweetalert';

const FormComponent = () => {
  const [data, setData] = useState([]);
  const [selectedNumberRoom, setSelectedNumberRoom] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [fullName, setFullName] = useState("");
  const [identification, setIdentification] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [formData, setFormData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Fetch data from the given endpoint
    axios
      .get("http://192.168.1.17:3200/rooms")
      .then((response) => {
        console.log("Data fetched successfully!");
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const roomDis = data.filter((item) => item.idState === 1);
  const roomOcup = data.filter(
    (item) => item.idState === 2 || item.idState === 3
  );

  const handleButtonClick = (numberRoom, id) => {
    setSelectedNumberRoom(numberRoom);
    setSelectedRoomId(id);
  };

  const handleSaveClick = () => {
    const formData = {
      IdRoom: selectedRoomId,
      FullName: fullName,
      DocumentIdentification: identification,
      Entry: new Date(checkInDate).toISOString(),
      Out: new Date(checkOutDate).toISOString(),
    };

    if (selectedRoomId) {
      axios
        .put(
          `http://192.168.1.17:3200/rooms/${selectedRoomId}`,
          JSON.stringify({idState:2}),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Change State successful!");
        })
        .catch((error) => {
          console.error("Error sending form data:", error);
        });
    }

    if (formData) {
      axios
        .post(
          "http://192.168.1.17:3200/newRegister",
          JSON.stringify(formData),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Form data sent successfully!");
          setShowAlert(true);
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
    <div id="FormularioRegistro" className="container">
      <h3>Registro de Huespedes</h3>
      <br />
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="inputFullName"
          placeholder="Nombres"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="inputFullName">Nombres Completos</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="DocIde"
          placeholder="N° de Identificación"
          value={identification}
          onChange={(e) => setIdentification(e.target.value)}
        />
        <label htmlFor="DocIde">N° Identificación</label>
      </div>
      <h5>Seleccione una Habitación</h5>
      <br />
      <div className="card" style={{ padding: "10px" }}>
        <div className="row">
          <div className="col-md-6">
            <p>Habitaciónes Disponibles</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              {roomDis.map((item, index) => (
                <button
                  className={`btn ${
                    selectedNumberRoom === item.NumberRoom
                      ? "btn-warning"
                      : "btn-success"
                  }`}
                  type="button"
                  key={index}
                  onClick={() => handleButtonClick(item.NumberRoom, item.id)}
                >
                  {item.NumberRoom}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <p>Habitaciónes Ocupadas</p>
            <div className="row">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                {roomOcup.map((item, index) => (
                  <button
                    className={`btn ${
                      selectedNumberRoom === item.NumberRoom
                        ? "btn-warning"
                        : "btn-danger"
                    }`}
                    type="button"
                    key={index}
                    onClick={() => handleButtonClick(item.NumberRoom)}
                    disabled
                  >
                    {item.NumberRoom}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="RoomSelect"
          placeholder="Número de Habitación"
          value={selectedNumberRoom}
          readOnly
          disabled
        />
        <label htmlFor="RoomSelect">Número de Habitación Seleccionada</label>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="datetime-local"
              className="form-control"
              id="EntreDate"
              placeholder="Fecha de Ingreso"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
            <label htmlFor="EntreDate">Fecha de Ingreso</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="datetime-local"
              className="form-control"
              id="OutDate"
              placeholder="Fecha de Salida"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
            <label htmlFor="OutDate">Fecha de Salida</label>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSaveClick}>
        Guardar
      </button>
      <SweetAlert
        success
        show={showAlert}
        title="Form Data Submitted"
        onConfirm={hideAlert}
      >
        Your form data has been successfully submitted to the API.
      </SweetAlert>
      <br />
    </div>
  );
};

export default FormComponent;
