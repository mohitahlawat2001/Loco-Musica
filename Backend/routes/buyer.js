import express from "express"
import { login, orders, register , simplefun } from "../controllers/control.js";
const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/orders",orders);
router.route("/some").get(simplefun)



export default router;