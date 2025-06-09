import express, { Request, Response } from "express";

const router = express.Router();

// Get all users
router.get("/", (req: Request, res: Response) => {
  res.send("Users");
});

export default router;
