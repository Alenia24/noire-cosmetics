import express, { Request, Response } from "express";

const router = express.Router();

// Get all orders
router.get("/", (req: Request, res: Response) => {
  res.send("Orders");
});

export default router;
