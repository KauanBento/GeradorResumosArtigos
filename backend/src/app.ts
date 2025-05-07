import express from "express";
import artigoRoutes from "./routes/artigo.routes"

const app = express();

app.use(express.json());
app.use("/api", artigoRoutes);

export { app };