const Wilder = require("../entity/wilder");
const Skill = require("../entity/Skill");
const Grade = require("../entity/Grade");
const dataSource = require("../utils").dataSource;

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .save(req.body)
      .then(() => {
        res.send("Wilder created");
      })
      .catch((err) => {
        console.log(err, "Error when creating wilder");
        res.send("Error when creating wilder");
      });
  },

  read: async (req, res) => {
    try {
      const allWilders = await dataSource.getRepository(Wilder).find();
      res.send(allWilders);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the wilders");
    }
  },

  delete: async (req, res) => {
    try {
      await dataSource.getRepository(Wilder).delete(req.params.id);
      res.send("wilder deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting wilder");
    }
  },

  update: async (req, res) => {
    try {
      await dataSource
        .getRepository(Wilder)
        .update({ id: req.body.id }, { name: req.body.name });
      res.send("wilder updated");
    } catch (err) {
      console.log(err);
      res.send("wilder not updated");
    }
  },

  addSkill: async (req, res) => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneBy({ name: req.body.wilderName });
      console.log("wilder", wilderToUpdate);
      const skillToAdd = await dataSource
        .getRepository(Skill)
        .findOneBy({ name: req.body.skillName });
      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      console.log("Skill", skillToAdd);
      await dataSource.getRepository(Wilder).save(wilderToUpdate);
      res.send("Skill added to wilder");
    } catch (err) {
      console.log(err);
      res.send("Error while adding skill to wilder");
    }
  },
  rateSkill: async (req, res) => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneByOrFail({ name: req.body.wilderName });
      console.log(wilderToUpdate);
      const skillToRate = await dataSource
        .getRepository(Skill)
        .findOneByOrFail({ name: req.body.skillName });
      console.log(skillToRate);
      const rating = await dataSource.getRepository(Grade).save({
        value: req.body.value,
        skills: skillToRate,
        wilders: wilderToUpdate,
      });
      res.send("Skill successfully rated !");
    } catch (err) {
      console.log(err);
      res.send("Error while rating the skill.");
    }
  },
};
