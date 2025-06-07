const { envs } = require("./config/env");
const { startServer } = require("./server/server");

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
