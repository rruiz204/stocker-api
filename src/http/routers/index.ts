import { Router } from "express";
import AuthRouter from "./AuthRouter";

const ApiRouter = Router();

ApiRouter.use("/auth", AuthRouter);

export default ApiRouter;