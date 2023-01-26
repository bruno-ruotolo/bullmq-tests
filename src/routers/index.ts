import { Router } from "express";
import { photoRouter } from "./photoRouter.js";

const mainRouter = Router();

mainRouter.use(photoRouter);

export default mainRouter;
