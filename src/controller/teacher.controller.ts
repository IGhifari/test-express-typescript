import { Request, Response } from "express";

import { getTeachers, insertTeacher, getTeachersbyId , deleteTeacher, updateTeacherById } from "../services/teacher.service";


async function getAllTeacher(req: Request, res: Response) {
  const teacher = await getTeachers();
  res.json(teacher);
}


async function createTeacher(req: Request, res: Response) {
    try {
    const teacherData = req.body;

    if (
        !(
        teacherData.nig &&
        teacherData.name &&
        teacherData.email 
        
        )
    ) {
        res.status(400).json({ message: "Some fields are missing" });
    }

    await insertTeacher(teacherData);

    res.status(201).json({
        data: teacherData,
        message: "Teacher created successfully",
    });
    } catch (error) {
    if (error instanceof Error) {
        res.status(400).send(error.message);
    } else {
        res.status(400).send("An unknown error has occured");
    }
    }
}

async function getTeacherById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const teacher = await getTeachersbyId(id);
    res.json(teacher);
}

async function deleteTeacherById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const teacher = await deleteTeacher(id);
    res.json(teacher);
}

async function updateTeacher(req: Request, res: Response) {
    try {
        const teacherData = req.body;
        const id = Number(req.params.id);
        const teacher = await updateTeacherById(
            id, teacherData 
        );
        res.status(201).json({
      data: teacherData,
      message: "Teacher created successfully",
    });
    } catch (error) {
        
    }
}

export {getAllTeacher , createTeacher, getTeacherById, deleteTeacherById, updateTeacher};