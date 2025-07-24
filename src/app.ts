import http from "http";
import { Server } from "./shared/infraestructure/routes/server";
import { envs } from "./shared/config/envs";

(async () => {
  main();
})();

function main() {
  const server = new Server();

  server.start();
}
