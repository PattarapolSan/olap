import type { Request } from "express";

interface ILandmarkRequestQuery {
    lat?: string;
    lon?: string;
    city?: string;
    radius?: string;
}

export interface ILandmarkRequest extends Request<{}, {}, {}, ILandmarkRequestQuery> {}