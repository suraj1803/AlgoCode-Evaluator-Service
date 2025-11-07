import { Job } from "bullmq";
import { IJob } from "../types/bullMQJobDefinition";

export default class SampleJob implements IJob {
  name: string;
  payLoad?: Record<string, unknown>;
  constructor(payLoad: Record<string, unknown>) {
    this.name = this.constructor.name;
    this.payLoad = payLoad;
  }

  handle = (job?: Job) => {
    if (job) {
      console.log(job.name, job.id, job.data);
    }
  };

  failed = (job?: Job) => {
    console.log("Job failed: ", job ? job.id : "");
  };
}
