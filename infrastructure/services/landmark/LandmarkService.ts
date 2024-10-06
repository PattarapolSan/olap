import { ILandmarkService } from "../../interfaces/landmark/ILandmarkService";
import { FourSquareService } from "../externalApi/FourSquareService";

export class LandmarkService implements ILandmarkService 
   { 
    constructor(private fourSquareService: FourSquareService) {}
    
    async getLandmarks(lat?: string, lon?: string, city?: string, radius?: string): Promise<unknown> {
        try {
            return await this.fourSquareService.getLandmark(lat, lon, city, radius)
        } catch (error) {
            throw new Error(`Failed to fetch landmarks: ${(error as Error).message}`);
        }
    }
}