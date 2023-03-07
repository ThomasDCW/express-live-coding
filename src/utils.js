const typeorm = require("typeorm");

module.exports = {
  dataSource: new typeorm.DataSource({
    database: "./wildersdb.sqlite",
    type: "sqlite",
    synchronize: true,
    entities: [require("./entity/Wilder"), require("./entity/Skill")],
    logging: ["query", "error"],
  }),
};
