import { Request, Response, Router } from "express";
import { getUserData } from "../../helpers/getUserData";

const router = Router();

router.get("/:username/skills", async (req: Request<{ username: string }>, res: Response) => {
  const username = req.params.username;

  const userInfo = await getUserData(username);

  if (userInfo === null) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json(userInfo);
});

export default router;
