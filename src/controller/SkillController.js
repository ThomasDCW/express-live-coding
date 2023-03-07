const Skill = require("../entity/Skill");
const dataSource = require("../utils").dataSource;

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(Skill)
      .save(req.body)
      .then(() => {
        res.send("Skill created");
      })
      .catch((err) => {
        console.log(err, "Error when creating Skill");
        res.send("Error when creating Skill");
      });
  },

  read: async (req, res) => {
    try {
      const allSkills = await dataSource.getRepository(Skill).find();
      res.send(allSkills);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the Skills");
    }
  },

  delete: async (req, res) => {
    try {
      await dataSource.getRepository(Skill).delete(req.params.id);
      res.send("Skill deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting Skill");
    }
  },

  update: async (req, res) => {
    try {
      await dataSource
        .getRepository(Skill)
        .update({ id: req.body.id }, { name: req.body.name });
      res.send("Skill updated");
    } catch (err) {
      console.log(err);
      res.send("Skill not updated");
    }
  },
};
