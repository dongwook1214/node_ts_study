import express, { Request, Response, NextFunction, Router } from "express";

interface LoginResponse {
  succeed: boolean;
  message: string;
}

const user = {
  id: ["1234"],
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
    const [id, password] = [req.body["id"], req.body["password"]];
    if (
      user.id.includes(id) &&
      user.password[user.id.indexOf(req.body["id"])] == password
    ) {
      console.log(req.body);
      const loginResponse: LoginResponse = { succeed: true, message: "굳" };
      return res.json(loginResponse);
    } else {
      const loginResponse: LoginResponse = {
        succeed: false,
        message: "아이디 패스워드 오류!",
      };
      return res.json(loginResponse);
    }
  },
};

export { view, process };
