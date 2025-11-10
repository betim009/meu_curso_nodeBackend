import express from "express";
import professorRoutes from "./src/routes/professorRoutes.mjs";

const app = express();

app.use(express.json());
app.use("/professores", professorRoutes);

export default app;
