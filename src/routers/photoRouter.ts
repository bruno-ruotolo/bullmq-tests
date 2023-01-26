import { Router } from "express";
import { photoController } from "../controllers/photoController.js";

export const photoRouter = Router();

photoRouter.get("/photos", photoController.getPhotos);
