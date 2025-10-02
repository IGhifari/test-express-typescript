import { Request, Response } from "express";

import { getStudents, insertStudent, getStudentsbyId , deleteStudent, updateStudentById } from "../services/student.service";


async function getAllStudent(req: Request, res: Response) {
  const student = await getStudents();

  res.json(student);
}


async function createStudent(req: Request, res: Response) {
  try {
    const studenData = req.body;

    if (
        !(
        studenData.name &&
        studenData.email 
        
        )
    ) {
        res.status(400).json({ message: "Some fields are missing" });
    }

    await insertStudent(studenData);

    res.status(201).json({
        data: studenData,
        message: "Students created successfully",
    });
    } catch (error) {
    if (error instanceof Error) {
        res.status(400).send(error.message);
    } else {
        res.status(400).send("An unknown error has occured");
    }
    }
}

async function getStudentsById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const student = await getStudentsbyId(id);
    res.json(student);


}



async function deleteStudentById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = await deleteStudent(id);
    res.json(user);
}

async function updateStudent(req: Request, res: Response) {
    try {
        const userData = req.body;
        const id = Number(req.params.id);
        const user = await updateStudentById(
            id, userData 
        );
        res.status(201).json({
      data: userData,
      message: "Student created successfully",
    });
    } catch (error) {
        
    }
}

export { getAllStudent, createStudent, getStudentsById, deleteStudent, updateStudent};