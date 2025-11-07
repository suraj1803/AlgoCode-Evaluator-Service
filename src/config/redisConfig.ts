import Redis from "ioredis";
import { REDIS_HOST, REDIS_PORT } from "./serverConfig";
import { RedisConnection } from "bullmq";

const redisConfig = {
  port: Number(REDIS_PORT),
  host: String(REDIS_HOST),
};

const redisConnection = new Redis({
  ...redisConfig,
  maxRetriesPerRequest: null,
});
export default redisConnection;
