import express, { Request, Response } from "express";

const router = express.Router();

// Get all products
router.get("/", (req: Request, res: Response) => {
  res.send("Products");
});

export default router;
