import express from "express";
import cors from "cors";
import type { Request, Response } from "express";

import apiRoutes from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: process.env.WEB_ORIGIN ?? "http://localhost:3000",
  }),
);

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "API opérationnelle",
  });
});

app.use("/api", apiRoutes);

export default app;
