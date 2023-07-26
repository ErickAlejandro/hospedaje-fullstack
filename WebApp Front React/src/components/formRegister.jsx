import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Styles/formRegister.css'

const FormComponent = () => {
  const [data, setData] = useState([]);
  const [selectedNumberRoom, setSelectedNumberRoom] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [fullName, setFullName] = useState("");
  const [identification, setIdentification] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

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
    // Save the input data when the "Save" button is clicked
    console.log("Saved data:");
    console.log("NumberRoom Id:", selectedRoomId);
    console.log("Full Name:", fullName);
    console.log("Identification:", identification);
    console.log("Check-In Date:", checkInDate);
    console.log("Check-Out Date:", checkOutDate);
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
                  className="col-md-6"
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
                <div className="col-md-6">
                  {roomOcup.map((item, index) => (
                    <p key={index}>{item.NameState}</p>
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
      <br />
    </div>
  );
};

export default FormComponent;
