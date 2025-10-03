import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
const prisma = new PrismaClient();


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(401).json({ message: "User not found" });

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(401).json({ message: "Invalid password" });

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
    );

    res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    } 
});


export default router;