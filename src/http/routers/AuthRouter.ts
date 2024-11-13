import { Router } from "express";
import AuthController from "@controllers/AuthController";

const AuthRouter = Router();

AuthRouter.post("/login", AuthController.login);

export default AuthRouter;