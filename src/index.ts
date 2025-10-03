import { Request, Response } from "express";
import routerUser from "./routes/user.route";
import routerTeachers from "./routes/teacher.route";
import routerStudents from "./routes/student.route";
const express = require('express');
const app =  express();
const port = 3000;


app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the other side");
});



app.use("/api", routerUser);
app.use("/api", routerStudents);
app.use("/api", routerTeachers);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});