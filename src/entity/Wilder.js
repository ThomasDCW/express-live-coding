const EntitySchema = require("typeorm").EntitySchema;
module.exports = new EntitySchema({
  name: "Wilder",
  columns: {
    id: {
      primary: true,
      type: "int",
    },
    name: {
      type: "text",
    },
    city: {
      type: "text",
    },
  },
  relations: {
    skills: {
      target: "Skill",
      type: "many-to-many",
      joinTable: true,
      eager: true,
    },
    grades: {
      target: "Grade",
      type: "one-to-many",
      joinTable: true,
    },
  },
});
