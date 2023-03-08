const Grade = require("../entity/Grade");
const dataSource = require("../utils").dataSource;

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(Grade)
      .save(req.body)
      .then(() => {
        res.send("Value created");
      })
      .catch((err) => {
        console.log(err, "Error when creating Value");
        res.send("Error when creating Value");
      });
  },

  read: async (req, res) => {
    try {
      const allSkills = await dataSource.getRepository(Grade).find();
      res.send(allSkills);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the Values");
    }
  },

  delete: async (req, res) => {
    try {
      await dataSource.getRepository(Grade).delete(req.params.id);
      res.send("Value deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting Value");
    }
  },

  update: async (req, res) => {
    try {
      await dataSource
        .getRepository(Grade)
        .update({ id: req.body.id }, { value: req.body.value });
      res.send("Value updated");
    } catch (err) {
      console.log(err);
      res.send("Value not updated");
    }
  },
};
