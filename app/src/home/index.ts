import express, { Request, Response, NextFunction, Router } from "express";
import * as ctrl from "../../bin/controller/home/ctrl";

const router: Router = express.Router();

router.get("/", ctrl.main);
router.get("/login", ctrl.login);

export { router };
