import { Worker } from "bullmq";
import { connection } from "./connection.js";

export async function consumer() {
  const worker = new Worker(
    "Names",
    async function (job) {
      console.log(job.data);
    },
    { connection }
  );
}
