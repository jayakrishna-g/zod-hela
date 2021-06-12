const express = require("express");
const apiRoutes = require("./Backend/index");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api", apiRoutes);

app.use(express.static(`${__dirname}/frontend/dist/frontend`));
app.get("/", (req, res) => res.sendFile(`${__dirname}/frontend/dist/frontend/index.html`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
