import express from "express";
import router from "./routes";
import cors from "cors";

const port = 3000;

const app = express();

app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

export default app;
