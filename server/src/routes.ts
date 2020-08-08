import { Router } from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionController";

const routes = Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionController();

routes.get("/", (request, response) => {
  return response.json({ name: "proffy-api", status: "up" });
});

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

export default routes;
