import { Request, Response } from "express";

const notFoundRoute = (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} cannot found!`,
    error: {
      code: 404,
      description: "Please provide an valid Route",
    },
  });
};

export default notFoundRoute;
