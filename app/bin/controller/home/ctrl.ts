import express, { Request, Response, NextFunction, Router } from "express";

const user = {
  id: ["hihi"],
  password: ["1234"],
};

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
    if (
      user.id.includes(req.body["id"]) &&
      user.password[user.id.indexOf(req.body["id"])] == req.body["password"]
    ) {
    }
    console.log(req.body);
  },
};

export { view, process };
