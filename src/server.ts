import "dotenv/config"
import express, { json } from "express";
import { router } from "./routes";
import { setupMongo } from "./database";

setupMongo().then(() => {
  const app = express();

  app.use(json());
  app.use(router)

  app.listen(3333, () => console.log("App is running at port 3333!"))
})