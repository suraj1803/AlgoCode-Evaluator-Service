import express, { Request, Response } from "express";
import apiRouter from "./routes";
import { PORT } from "./config/serverConfig";

const app = express();

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
