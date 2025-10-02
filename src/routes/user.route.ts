import { Router } from "express";


import { getAllUser, createUser , getUserById, deleteUserById, updateUser } from "../controller/user.controller";

const routerUser = Router();

routerUser.get("/users", getAllUser);
routerUser.post("/users", createUser);
routerUser.get("/users/:id", getUserById);
routerUser.delete("/users/:id", deleteUserById);
routerUser.put("/users/:id", updateUser);
export default routerUser;