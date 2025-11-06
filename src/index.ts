import express, { Request, Response } from "express";
import serverConfig from "./config/serverConfig";

const app = express();

app.use("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from the express server..." });
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at: http://localhost:${serverConfig.PORT}`);
});
