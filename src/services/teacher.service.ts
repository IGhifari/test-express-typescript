import prisma from "../db";

import bcrypt from "bcrypt";
import { Teacher } from "@prisma/client";

async function getTeachers(){
    return await prisma.teacher.findMany();
}


async function insertTeacher({
    nig,
    name,
    email,
    password
}: Teacher) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.teacher.create({
    data: {
        nig,
        name,
        email,
        password: hashedPassword
    },
    });
}

async function getTeachersbyId(id: number) {
    return await prisma.teacher.findUnique({
        where: {
            id
        }
    })
}

async function deleteTeacher(id: number){
    return await prisma.teacher.delete({
        where: {
            id
        }
    })
}

async function updateTeacherById(id: number, userData: Teacher) {
    return await prisma.teacher.update({
        where: {
            id
        },
        data: userData
    })
}


export {getTeachers, insertTeacher, getTeachersbyId,  deleteTeacher, updateTeacherById};