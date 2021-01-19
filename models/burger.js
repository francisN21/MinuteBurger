const orm = require("../config/orm.js");

const burger = {
  // calling all the ORM functions here
  all(cb) {
    orm.all("burgers", (res) => cb(res));
  },
  create(cb) {
    orm.all("burgers", (res) => cb(res));
  },
  update(cb) {
    orm.all("burgers", (res) => cb(res));
  },
  delete(cb) {
    orm.all("burgers", (res) => cb(res));
  },
};
