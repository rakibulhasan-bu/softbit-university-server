import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFoundRoute from "./middleware/notFoundRoute";
import routes from "./routes";

const app: Application = express();

//configure middleware
app.use(express.json());
app.use(cors());

// api here
app.use("/api", routes);

// landing or testing route
app.get("/", (_req: Request, res: Response) => {
  res.send(`Softbit University server is working perfectly`);
});

//global error handler and not found middleware use
app.use(notFoundRoute);
app.use(globalErrorHandler);

export default app;
