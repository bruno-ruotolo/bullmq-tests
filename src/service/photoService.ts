import axios from "axios";
import { Queue } from "bullmq";
import { Worker } from "bullmq";
import { createClient } from "redis";
export const photosQueue = new Queue("Photos");

async function getPhotos() {
  const client = createClient();
  await client.connect();

  const photosCached = await client.get("photos");

  if (!photosCached) {
    const URL = "https://jsonplaceholder.typicode.com";
    const { data: photos } = await axios.get(`${URL}/photos`);
    await client.set("photos", JSON.stringify(photos));
    await addQueue(photos);
  }

  await addQueue(JSON.parse(photosCached));

  new Worker("Photos", async (job) => {
    return await job.data;
  });
}

async function addQueue(photo: any) {
  await photosQueue.add("photo", photo);
}

export const photoService = { getPhotos };
