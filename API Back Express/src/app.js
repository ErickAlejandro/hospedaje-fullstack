import express from "express";
import config from "./config";
const cors = require("cors");

import rutas from "./routes/routes";

const app = express();
app.use(cors());

//settings
app.set("port", config.port);

//middlewares
// Middleware de registro de tiempo y recursos
const logMiddleware = (req, res, next) => {
  const start = process.hrtime(); // Tiempo de inicio de la consulta

  res.on("finish", () => {
    const elapsed = process.hrtime(start); // Tiempo transcurrido en [segundos, nanosegundos]
    const elapsedMs = elapsed[0] * 1000 + elapsed[1] / 1e6; // Tiempo transcurrido en milisegundos
    const memory = process.memoryUsage().heapUsed; // Uso de memoria en bytes

    console.log(`Tiempo de consulta: ${elapsedMs.toFixed(2)} ms`);
    console.log(`Uso de memoria: ${memory} bytes`);
  });

  next();
};

// Aplicar middleware a todas las rutas
app.use(logMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(rutas);
export default app;
