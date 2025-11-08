import { Job } from "bullmq";
import { IJob } from "../types/bullMQJobDefinition";
import { logger } from "../config/logger.config";

export default class SampleJob implements IJob {
  name: string;
  payLoad?: Record<string, unknown>;
  constructor(payLoad: Record<string, unknown>) {
    this.name = this.constructor.name;
    this.payLoad = payLoad;
  }

  handle = (job?: Job) => {
    if (job) {
      logger.info(
        `Job Info : Name: ${job.name}, Id: ${job.id}, Data: ${JSON.stringify(job.data)}`,
      );
    }
  };

  failed = (job?: Job) => {
    logger.error(`Job failed:  ${job ? job.id : ""}`);
  };
}
