import sampleQueue from "../queues/sampleQueue";

export default async function (name: string, payLoad: Record<string, unknown>) {
  await sampleQueue.add(name, payLoad);
  console.log("successfully added a job");
}
