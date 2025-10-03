import prisma from "../db";
import bcrypt from "bcrypt";

import { User } from "@prisma/client";

async function getUsers(){
    return await prisma.user.findMany();
}


async function insertUser({
    name,
    email,
    password
}: User) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
    data: {
        name,
        email,
        password: hashedPassword
    },
    });
}

async function getUsersById(id: number) {
    return await prisma.user.findUnique({
        where: {
            id
        }
    })
}

async function deleteUser(id: number){
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

async function updateUserById(id: number, userData: User) {
    let updateData = { ...userData };
    if (userData.password) {
        updateData.password = await bcrypt.hash(userData.password, 10);
    }
    return await prisma.user.update({
        where: {
            id
        },
        data: updateData
    })
}


export {getUsers, insertUser, getUsersById,  deleteUser, updateUserById};