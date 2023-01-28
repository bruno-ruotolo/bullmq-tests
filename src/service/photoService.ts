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
    return photos;
  }

  return JSON.parse(photosCached);
}

export const photoService = { getPhotos };
