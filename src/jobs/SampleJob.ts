import { Job } from "bullmq";
import { IJob } from "../types/bullMQJobDefinition";

export default class SampleJob implements IJob {
  name: string;
  payLoad?: Record<string, unknown>;
  constructor(payLoad: Record<string, unknown>) {
    this.name = this.constructor.name;
    this.payLoad = payLoad;
  }

  handler = (job?: Job) => {
    console.log("Handler of the job called");
  };

  failed = (job?: Job) => {
    console.log("Job failed: ", job ? job.id : "");
  };
}
