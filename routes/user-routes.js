import express from "express";
import { getAllUser, signup, login } from "../controllers/user-controllers";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/", getAllUser);

export default router;
