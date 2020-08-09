import { Router } from "express";
import ClassesControler from "./controllers/ClassesController";
import ConnectionsControler from "./controllers/ConnectionsController";

const classesController = new ClassesControler();
const connectionControlelr = new ConnectionsControler();

const routes = Router();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.store);

routes.post("/connections", connectionControlelr.store);
routes.get("/connections", connectionControlelr.index);

export default routes;
