import { Request, Response, Router } from "express";

const router = Router();

router.get("/:username/skills", (req: Request<{ username: string }>, res: Response): Response => {
  return res.send(req.params.username);
});

export default router;
