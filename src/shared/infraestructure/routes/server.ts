import express from "express";

import { envs } from "../../config/envs";
import { AppRoutes } from "./routes";
const { routes } = AppRoutes;

export class Server {
  private app = express();

  async start() {
    this.app.listen(envs.PORT, () => {
      console.log(`server running on port ${envs.PORT}`);
    });

    this.app.use(express.json());
    this.app.use(routes);
    this.app.use(express.urlencoded({ extended: true }));
  }
}
