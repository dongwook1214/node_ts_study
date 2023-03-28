import express from "express";
import { router } from "./src/router/home";

const app = express();
const port: number = 8080;

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", router);
app.use(express.static(`${__dirname}/src/public`));

app.listen(port);
