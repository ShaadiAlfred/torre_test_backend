import { Request, Response, Router } from "express";
import apiRoutes from "./api";

const router = Router();

router.get("/", (_: Request, res: Response): Response => {
    return res.send("Hello World");
});

router.use("/api", apiRoutes);

export default router;
