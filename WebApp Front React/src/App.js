import "./App.css";
import DataTable from "./components/DataTable";
import TableRooms from "./components/TableRooms";
import FormComponent from "./components/formRegister";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [dataRegister, setData] = useState([]);

  useEffect(() => {
    // Realizar la petición a la API al cargar el componente
    axios
      .get("http://192.168.1.17:3200/registers")
      .then((response) => {
        console.log("Tenemos respuesta de la data!");
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/DataTable"
              element={<DataTable data={dataRegister} />}
            />
            <Route path="/formRegister" element={<FormComponent />} />
            <Route
              path="/TableRooms"
              element={<TableRooms data={dataRegister} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
