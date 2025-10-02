import prisma from "../api";


import { User } from "@prisma/client";

async function getUsers(){
    return await prisma.user.findMany();
}


async function insertUser({
    name,
    email,
}: User) {
    return await prisma.user.create({
    data: {
        name,
        email
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
    return await prisma.user.update({
        where: {
            id
        },
        data: userData
    })
}


export {getUsers, insertUser, getUsersById,  deleteUser, updateUserById};