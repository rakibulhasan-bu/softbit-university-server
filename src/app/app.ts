import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.router";
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFoundRoute from "./middleware/notFoundRoute";

const app: Application = express();

//configure middleware
app.use(express.json());
app.use(cors());

// api here
app.use("/api/user", UserRoutes);

// landing or testing route
app.get("/", (_req: Request, res: Response) => {
  res.send(`Softbit University server is working perfectly`);
});

//global error handler and not found middleware use
app.use(notFoundRoute);
app.use(globalErrorHandler);

export default app;
