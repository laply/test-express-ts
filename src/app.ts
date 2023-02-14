import * as express from "express";
import { TestRouter } from "./test/test.router";

// const port: number = 8800;

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRouter(): void {
    this.app.use("/test", TestRouter);
  }

  private setMiddleware(): void {
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[0]);
      next();
    });

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.setRouter();

    /** 404 NOT FOUND */
    this.app.use((req, res, next) => {
      res.send({ error: "404 NOT FOUND" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log(`Server running on port ${8000}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
