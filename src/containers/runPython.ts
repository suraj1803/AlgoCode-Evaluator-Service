import Docker from "dockerode";
import { PYTHON_IMAGE } from "../utils/constants";
import { createContainer } from "./containerFactory";

export async function runPython(code: string) {
  const pythonDocker = await createContainer(PYTHON_IMAGE, [
    "python3",
    "-c",
    code,
    "stty -echo",
  ]);

  await new Promise<void>((resolve, reject) => {
    pythonDocker.start((err: any, data: any) => {
      if (err) return reject(err);
      console.log("Docker API response:", data);
      resolve();
    });
  });

  return pythonDocker;
}
