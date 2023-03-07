const Wilder = require("../entity/wilder");
const { dataSource } = require("../utils");

module.exports = {
  create: (req, res) => {
    console.log(req.body);
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
};
