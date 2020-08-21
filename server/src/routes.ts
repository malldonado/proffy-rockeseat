import express from "express";

import db from "./database/connection";
import ClassController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectinsController";

const routes = express.Router();

routes.get("/alternative-user-listing", async (request, response) => {
  const data = await db("users").select("*");

  console.log(data);

  return response.send(JSON.stringify(data));
});

routes.get("/alternative-class-listing", async (request, response) => {
  const data = await db("classes").select("*");

  console.log(data);

  return response.send(JSON.stringify(data));
});

routes.get("/alternative-schedule-listing", async (request, response) => {
  const data = await db("class_schedule").select("*");

  console.log(data);

  return response.send(JSON.stringify(data));
});

routes.get("/alternative-connection-listing", async (request, response) => {
  const data = await db("connections").select("*");

  console.log(data);

  return response.send(JSON.stringify(data));
});

const classesController = new ClassController();
const connectionController = new ConnectionController();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get("/connections", connectionController.index);
routes.post("/connections", connectionController.create);

export default routes;
