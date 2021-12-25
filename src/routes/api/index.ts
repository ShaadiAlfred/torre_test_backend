import { Request, Response, Router } from "express";
import userSkillsRoute from "./userSkills";

const router = Router();

router.get("/", (_: Request, res: Response): Response => {
  return res.json({ message: "Select a service" });
});

router.use("/", userSkillsRoute);

export default router;
