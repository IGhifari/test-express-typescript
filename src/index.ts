import { Request, Response } from "express";
import routerUser from "./routes/user.route";
import routerTeachers from "./routes/teacher.route";
import routerStudents from "./routes/student.route";
import router from "./routes/auth";
import { authMiddleware } from "./middleware/auth";


const express = require('express');
const app =  express();
const port = 3000;

const cors = require('cors');

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the other side");
});

app.use("/auth", router);


app.use("/api", routerUser);
app.use("/api", routerStudents);
app.use("/api", routerTeachers);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});