const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  //   use the ORM funtion to render burgers to be devoured on the screen
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", (req, res) => {
  burger.create(
    ["burger_name", "devour"],
    [req.body.name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", (req, res) => {
  // sets the condition
  const condition = `id = ${req.params.id}`;

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      //   if theres no row added or changed then the ID shouldn't exist
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burger/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  // use the delete function on ORM
  burger.delete(condition, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
