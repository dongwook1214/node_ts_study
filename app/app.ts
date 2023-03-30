import express from "express";
import { router } from "./src/router/home";

const app = express();
const port: number = 8080;

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => console.log("server start"));
