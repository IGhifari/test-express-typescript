import { Router } from "express";


import { getAllUser, createUser , getUserById, deleteUserById, updateUser } from "../controller/user.controller";

const router = Router();

router.get("/users", getAllUser);
router.post("/users", createUser);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.put("/users/:id", updateUser);
export default router;