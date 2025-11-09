import express, { Request, Response } from "express";
import apiRouter from "./routes";
import { PORT } from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import sampleWorker from "./workers/sampelWorker";
import { serverAdapter } from "./config/bullboardConfig";
import { logger } from "./config/logger.config";
import { runPython } from "./containers/runPython";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);
app.use("/api/queues/ui", serverAdapter.getRouter());

app.listen(PORT, async () => {
  logger.info(`Server started at: http://localhost:${PORT}`);

  sampleWorker("SampleQueue");

  sampleQueueProducer("SampleJob", { name: "Suraj" }, 100);
  sampleQueueProducer("SampleJob", { name: "Isan" }, 2);

  const code = `print(hello world)`;
  await runPython(code);
});
