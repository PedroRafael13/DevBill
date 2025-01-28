import express, { json } from "express";

const app = express();

app.use(json());

app.listen(33333, () => console.log("App is running at port 3333!"))