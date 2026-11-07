import type { Request, Response } from "express";

export function getHello(_req: Request, res: Response): void {
  res.status(200).json({
    message: "Bonjour depuis Express !",
    success: true,
  });
}
