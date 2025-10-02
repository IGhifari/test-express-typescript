import { Request, Response } from "express";

import { getUsers, insertUser, getUsersById , deleteUser, updateUserById } from "../services/user.service";


async function getAllUser(req: Request, res: Response) {
  const user = await getUsers();

  res.json(user);
}


async function createUser(req: Request, res: Response) {
  try {
    const userData = req.body;

    if (
        !(
        userData.name &&
        userData.email 
        
        )
    ) {
        res.status(400).json({ message: "Some fields are missing" });
    }

    await insertUser(userData);

    res.status(201).json({
        data: userData,
        message: "Smartphone created successfully",
    });
    } catch (error) {
    if (error instanceof Error) {
        res.status(400).send(error.message);
    } else {
        res.status(400).send("An unknown error has occured");
    }
    }
}

async function getUserById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = await getUsersById(id);
    res.json(user);


}

async function deleteUserById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = await deleteUser(id);
    res.json(user);
}

async function updateUser(req: Request, res: Response) {
    try {
        const userData = req.body;
        const id = Number(req.params.id);
        const user = await updateUserById(
            id, userData 
        );
        res.status(201).json({
      data: userData,
      message: "Smartphone created successfully",
    });
    } catch (error) {
        
    }
}

export { getAllUser, createUser, getUserById, deleteUserById, updateUser};