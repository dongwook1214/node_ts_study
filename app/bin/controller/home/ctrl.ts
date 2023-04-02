import express, { Request, Response, NextFunction, Router } from "express";
import { User } from "../../../src/model/User";
import { LoginResponse } from "../../../src/model/LoginResponse";

const view = {
  main: (req: Request, res: Response) => {
    res.render("home/index");
  },
  login: (req: Request, res: Response) => {
    res.render("home/login");
  },
};

const process = {
  login: (req: Request, res: Response) => {
    console.log(req.body);
    let user: User = new User(req.body["id"], req.body["password"]);
    let loginResponse: LoginResponse = user.login();
    return res.json(loginResponse);
  },
};

export { view, process };
