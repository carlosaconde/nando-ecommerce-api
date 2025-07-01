import express from "express";

import { envs } from "../config/envs";

export class Server {
  private app = express();

  async start() {
    this.app.listen(envs.PORT, () => {
      console.log(`server running on port ${envs.PORT}`);
    });
  }
}
