import { Router } from "express";

import { getTeacherById, getAllTeacher, createTeacher, deleteTeacherById, updateTeacher } from "../controller/teacher.controller";
import { getTeachersbyId } from "../services/teacher.service";

const routerTeachers = Router();

routerTeachers.get("/teachers", getAllTeacher);
routerTeachers.post("/teachers", createTeacher);
routerTeachers.get("/teachers/:id", getTeachersbyId);
routerTeachers.delete("/teachers/:id", deleteTeacherById);
routerTeachers.put("/teachers/:id", updateTeacher);
export default routerTeachers;