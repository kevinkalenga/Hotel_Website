import express from "express";
import { showMessage } from "../controller/auth.js"

const router = express.Router()



router.get('/:message', showMessage);

export default router