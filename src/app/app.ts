import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

//configure middleware
app.use(express.json());
app.use(cors());

// landing or testing route
app.get("/", (_req: Request, res: Response) => {
  res.send(`Softbit University server is working perfectly`);
});

export default app;
