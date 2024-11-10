import express, { type Request, type Response } from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "it is working babe! this is express 5.0" });
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});