import express from "express"
import { login, orders, register } from "../controllers/control.js";
const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/orders",orders);



export default router;