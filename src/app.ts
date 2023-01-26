import express, { json } from "express";
import cors from "cors";
import mainRouter from "./routers/index.js";

const app = express();

app.use(cors());
app.use(json());

app.use(mainRouter);

export default app;
