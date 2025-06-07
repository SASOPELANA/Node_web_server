// Método viejo de importación
// const { envs } = require("./config/env");
// const { startServer } = require("./server/server");

// Importación moderna de módulos
import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};

// función agnóstica auto convocada
// agnóstica por que no tiene nombre ==> anónima
// Auto convocada con paréntesis.

(async () => {
  main();
})();
