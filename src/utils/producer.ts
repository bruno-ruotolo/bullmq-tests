import { Queue } from "bullmq";
import { connection } from "./connection.js";

export async function producer() {
  const queue = new Queue("Names", { connection });
  return queue;
}
