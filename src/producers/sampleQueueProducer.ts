import sampleQueue from "../queues/sampleQueue";

export default async function (
  name: string,
  payLoad: Record<string, unknown>,
  priority: number,
) {
  await sampleQueue.add(name, payLoad, { priority });
}
