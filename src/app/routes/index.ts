import { Router } from "express";
import { UserRoutes } from "../modules/user/user.router";

const routes = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));

export default routes;
