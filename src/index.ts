import { Request, Response } from "express";
import router from "./routes/user.route";

const express = require('express');
const app =  express();
const port = 3000;


app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the other side");
});

app.use("/api", router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});