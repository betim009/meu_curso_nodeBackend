import express from "express";
import professorRoutes from "./src/routes/professorRoutes.mjs";
import authRoutes from "./src/routes/authRoutes.mjs";

const app = express();

app.use(express.json());
app.use("/professores", professorRoutes);
app.use("/auth", authRoutes);

export default app;
