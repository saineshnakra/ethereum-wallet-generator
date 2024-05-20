import express from "express";
import { createWallets } from "../controllers/walletController.js";

const router = express.Router();

router.post("/create", createWallets);

export default router;
