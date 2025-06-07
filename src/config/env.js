// Método viejo de importación
// require("dotenv").config();
// const { get } = require("env-var");

// Importación moderna de módulos
import env from "dotenv";
import envvar from "env-var";

env.config();

export const envs = {
  PORT: envvar.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: envvar.get("PUBLIC_PATH").default("public").asString(),
};

// sirve para exportar del método viejo en javascript
//module.exports = {
// envs,
// };
