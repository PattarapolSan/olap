import type { Request, Response } from "express";
import type { ILandmarkController } from "../../interfaces/landmark/ILandmarkController.ts"
import type { ILandmarkService } from "../../interfaces/landmark/ILandmarkService.ts";
import type { ILandmarkRequest } from "../../interfaces/landmark/ILandmarkRequest.ts";
export class LandmarkController implements ILandmarkController {
     constructor(private landmarkService: ILandmarkService) {}

     public async getNearBy(req: ILandmarkRequest, res: Response): Promise<void> {
          try {
               
               const { lat, lon, city, radius } = req.query
          
               const landmarks = await this.landmarkService.getLandmarks(lat, lon, city, radius);

               res.status(200).json(landmarks);
          } catch (error) {
               res.status(500).json({ error: "Failed to fetch landmarks" });
          }

     }

     
}