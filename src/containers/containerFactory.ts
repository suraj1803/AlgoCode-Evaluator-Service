import Docker from "dockerode";
import { logger } from "../config/logger.config";

export async function createContainer(
  imageName: string,
  cmdExecutatble: string[]
) {
  const docker = new Docker();

  const stream = await docker.pull(imageName);

  await new Promise<void>((resolve, reject) => {
    docker.modem.followProgress(
      stream,
      (err, output) => {
        process.stdout.write("\n");
        if (err) {
          logger.error(`\nFailed to pull image: ${imageName}`);
          reject(err);
        } else {
          logger.info(`Finished pulling image: ${imageName}`);
          resolve();
        }
      },
      (event) => process.stdout.write(".")
    );
  });

  const container = await docker.createContainer({
    Image: imageName,
    Cmd: cmdExecutatble,
    AttachStderr: true,
    AttachStdin: true,
    AttachStdout: true,
    Tty: false,
    OpenStdin: true,
  });

  return container;
}
