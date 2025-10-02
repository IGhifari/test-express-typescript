import { Router } from "express";


import { getStudentsById, createStudent, deleteStudent ,getAllStudent, updateStudent } from "../controller/student.controller";

const routerStudents = Router();

routerStudents.get("/students", getAllStudent);
routerStudents.post("/students", createStudent);
routerStudents.get("/students/:id", getStudentsById);
routerStudents.delete("/students/:id", deleteStudent);
routerStudents.put("/students/:id", updateStudent);
export default routerStudents;