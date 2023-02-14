import * as express from "express";

const app: express.Express = express();
const port: number = 8800;

app.get("/", (_: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
