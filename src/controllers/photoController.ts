import { photoService } from "./../service/photoService.js";
import { Request, Response } from "express";

async function getPhotos(req: Request, res: Response) {
  const data = await photoService.getPhotos();
  console.log(data);

  res.status(200).send(data);
}

export const photoController = { getPhotos };
