const express = require("express");
const dataSource = require("./utils").dataSource;
const Wilder = require("./entity/Wilder");
const wildercontroller = require("./controller/WilderController");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", wildercontroller.read);
app.post("/api/wilder", wildercontroller.create);
app.delete("/api/wilder/:id", wildercontroller.delete);
app.put("/api/wilder", wildercontroller.update);

const start = async () => {
  await dataSource.initialize();
  app.listen(3000, () => {
    console.log("Server started on 3000");
  });
};

start();
