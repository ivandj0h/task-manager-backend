import asyncHandler from "express-async-handler";

export const createTask = asyncHandler(async (req, res) => {
  try {
    const data = "ini dari Controller";
    res.status(200).json({ message: "Hello from Controller" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Terjadi Error pada Server!" });
  }
});
