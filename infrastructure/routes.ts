import {Router} from "express";
import { LandmarkController } from "./controller/landmark/LandmarkController";
import { FourSquareService } from "./services/externalApi/FourSquareService";
import { LandmarkService } from "./services/landmark/LandmarkService";

const routes = Router()
const fourSquareService = new FourSquareService();
const landmarkService = new LandmarkService(fourSquareService);
const landmarkController = new LandmarkController(landmarkService);


routes.get("/", (req, res) => {
    res.send("Olap!");
  });

routes.get("/landmarks",(req, res) => landmarkController.getNearBy(req, res))

export default routes;