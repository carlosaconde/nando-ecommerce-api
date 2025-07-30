import express from "express";

import { envs } from "../../config/envs";
import ApiRouter from "./routes";

export class Server {
  private app = express();

  async start() {
    this.app.use(express.json());

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(ApiRouter);
    this.app.listen(envs.PORT, () => {
      console.log(`server running on port ${envs.PORT}`);
    });
  }
}
