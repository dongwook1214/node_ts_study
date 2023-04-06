import express, { Request, Response, NextFunction, Router } from "express";
import * as ctrl from "../../../bin/controller/home/ctrl";

const router: Router = Router();

router.get("/", ctrl.view.main);
router.get("/login", ctrl.view.login);
router.post("/login", ctrl.process.login);
router.post("/logout", ctrl.process.logout);

export { router };
