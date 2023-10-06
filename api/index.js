const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
require("./database/database-config");

app.use(cors());
app.use(express.json());
app.use(routes);

// Para executar o servidor precisa do comando "npm run dev".
app.listen(8080);
