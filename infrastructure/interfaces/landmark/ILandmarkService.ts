export interface ILandmarkService {
    getLandmarks(lat?: string, lon?: string, city?: string, radius?: string):Promise<unknown>;
}