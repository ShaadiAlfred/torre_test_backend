import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_: Request, res: Response): Response => {
    return res.json({ "message": "Select a service" });
});

export default router;

