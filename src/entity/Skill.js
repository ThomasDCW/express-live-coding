const EntitySchema = require("typeorm").EntitySchema;
module.exports = new EntitySchema({
  name: "Skill",
  columns: {
    id: {
      primary: true,
      type: "int",
    },
    name: {
      type: "text",
      unique: true,
    },
  },
  relations: {
    grades: {
      target: "Grade",
      type: "one-to-many",
      joinTable: true,
    },
  },
});
