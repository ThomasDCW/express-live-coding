const Wilder = require("../entity/wilder");
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
};
