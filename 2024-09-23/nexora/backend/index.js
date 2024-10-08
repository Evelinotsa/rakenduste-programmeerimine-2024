const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));

const catsRoutes = require("./routes/cats.routes");
const exampleRoutes = require("./routes/example.routes");
const todoRoutes = require("./routes/todo.routes");

app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/examples", exampleRoutes);
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
