import express from "express";

const router = express.Router();

// create Routes
router.post("/task/create", (req, res) => {
  res.send("Task successfully created!");
});

export default router;
