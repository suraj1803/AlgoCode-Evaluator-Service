import express, { Request, Response } from "express";
import apiRouter from "./routes";
import { PORT } from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import sampleWorker from "./workers/sampelWorker";

const app = express();

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);

  sampleWorker("SampleQueue");

  sampleQueueProducer("SampleJob", { name: "Suraj" }, 100);
  sampleQueueProducer("SampleJob", { name: "Isan" }, 2);
});
