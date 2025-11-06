import Redis from "ioredis";
import { REDIS_HOST, REDIS_PORT } from "./serverConfig";

const redisConfig = {
  port: Number(REDIS_PORT),
  host: String(REDIS_HOST),
};

const redisConnection = new Redis(redisConfig);
export default redisConnection;
