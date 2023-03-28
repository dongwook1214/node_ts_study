import express, { Request, Response, NextFunction, Router } from "express";
const main = (req: Request, res: Response) => {
  res.render("home/index");
};
const login = (req: Request, res: Response) => {
  res.render("home/login");
};
export { main, login };
