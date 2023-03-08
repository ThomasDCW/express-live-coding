const express = require("express");
const dataSource = require("./utils").dataSource;
const wildercontroller = require("./controller/WilderController");
const skillcontroller = require("./controller/SkillController");
const gradeController = require("./controller/GradeController");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", wildercontroller.read);
app.post("/api/wilder", wildercontroller.create);
app.put("/api/wilder/addskill", wildercontroller.addSkill);
app.delete("/api/wilder/:id", wildercontroller.delete);
app.put("/api/wilder", wildercontroller.update);

app.get("/api/skill", skillcontroller.read);
app.post("/api/skill", skillcontroller.create);
app.delete("/api/skill/:id", skillcontroller.delete);
app.put("/api/skill", skillcontroller.update);

app.get("/api/grade", gradeController.read);
app.post("/api/grade", gradeController.create);
app.put("/api/grade", gradeController.update);
app.delete("/api/grade/:id", gradeController.delete);

const start = async () => {
  await dataSource.initialize();
  app.listen(3000, () => {
    console.log("Server started on 3000");
  });
};

start();
