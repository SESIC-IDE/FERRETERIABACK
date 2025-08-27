import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productosRoutes from "./routes/productos.js";

// cargar variables de entorno
dotenv.config();

// Debug para confirmar
console.log("Variables cargadas:", {
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PASS: process.env.DB_PASS,
  DB_PORT: process.env.DB_PORT,
  PORT: process.env.PORT,
});

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/productos", productosRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
