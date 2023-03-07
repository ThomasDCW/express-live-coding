const typeorm = require("typeorm");

module.exports = {
  dataSource: new typeorm.DataSource({
    database: "./wildersdb.sqlite",
    type: "sqlite",
    synchronize: true,
    entities: [require("./entity/wilder")],
    logging: ["query", "error"],
  }),
};
