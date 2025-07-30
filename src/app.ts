import http from "http";
import { Server } from "./shared/infrastructure/routes/server";
import { envs } from "./shared/config/envs";

(async () => {
  main();
})();

function main() {
  const server = new Server();

  server.start();
}
