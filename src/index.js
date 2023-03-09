const express = require("express");
const cors = require("cors");
const dataSource = require("./utils").dataSource;
const wildercontroller = require("./controller/WilderController");
const skillcontroller = require("./controller/SkillController");
const gradeController = require("./controller/GradeController");

const app = express();
const PORT = 8000;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", wildercontroller.read);
app.post("/api/wilder", wildercontroller.create);
app.put("/api/wilder/addskill", wildercontroller.addSkill);
app.delete("/api/wilder/:id", wildercontroller.delete);
app.put("/api/wilder", wildercontroller.update);
app.put("/api/wilder-rate-skill", wildercontroller.rateSkill);

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
  app.listen(PORT, () => {
    console.log("Server started on 3000");
  });
};

start();
