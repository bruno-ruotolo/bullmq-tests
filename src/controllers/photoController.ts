import { photoService } from "./../service/photoService.js";
import { Request, Response } from "express";
import { producer } from "../utils/producer.js";
import { consumer } from "../utils/consumer.js";

async function getPhotos(req: Request, res: Response) {
  const queue = await producer();
  await consumer();

  const data = await photoService.getPhotos();

  try {
    await queue.add("NameJob", { photos: data });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ status: "Ok" });
}

export const photoController = { getPhotos };
