const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  // Ruta absoluta para el contenido estático
  const staticPath = path.resolve(process.cwd(), public_path);
  app.use(express.static(staticPath));

  // Captura todas las rutas restantes (debe ir después de express.static)
  app.use((req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
};

module.exports = {
  startServer,
};
