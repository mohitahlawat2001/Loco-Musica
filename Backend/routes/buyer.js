import express from "express"
import { login, logout, orders, register ,somefun} from "../controllers/control.js";
const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/orders",orders);
router.get("/some" , somefun);
router.get("/logout" , logout);



export default router;