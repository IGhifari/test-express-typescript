import prisma from "../db";

import  {Student}  from "@prisma/client";
import bcrypt from "bcrypt";
async function getStudents(){
    return await prisma.student.findMany();
}

async function insertStudent({
    name,
    age,
    email,
    password
}: Student) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.student.create({
    data: {
        name,
        age,
        email,
        password: hashedPassword
    },
    });
}

async function getStudentsbyId(id: number) {
    return await prisma.student.findUnique({
        where: {
            id
        }
    })
}

async function deleteStudent(id: number){
    return await prisma.student.delete({
        where: {
            id
        }
    })
}

async function updateStudentById(id: number, studentData: Student) {
    return await prisma.student.update({
        where: {
            id
        },
        data: studentData
    })
}


export {getStudents, insertStudent, getStudentsbyId,  deleteStudent, updateStudentById};