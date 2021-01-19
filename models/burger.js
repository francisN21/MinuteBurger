const orm = require("../config/orm.js");

const burger = {
  // calling all the ORM functions here
  all(cb) {
    orm.all("burgers", (res) => cb(res));
  },
  create(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => cb(res));
  },
  delete(objColVals, condition, cb) {
    orm.delete("burgers", objColVals, condition, (res) => cb(res));
  },
};

module.exports = burger;
