import express, { Application } from "express";
import routes from "./routes";

const app: Application = express();

app.use(express.json())

app.use("/olap", routes);

export default app;


