import express from "express";
import { showMessage, register } from "../controller/auth.js";

const router = express.Router()



router.get('/:message', showMessage);
router.post('/register', register)

export default router