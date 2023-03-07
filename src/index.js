const express = require("express");
const dataSource = require("./utils").dataSource;
const Wilder = require("./entity/Wilder");
const wildercontroller = require("./controller/WilderController");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/wilder", wildercontroller.create);

const start = async () => {
  await dataSource.initialize();
  app.listen(3000, () => {
    console.log("Server started on 3000");
  });
};

start();