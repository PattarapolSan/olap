import type { Request, Response } from "express";

export interface ILandmarkController {
    getNearBy(req: Request, res: Response): Promise<void>;
}