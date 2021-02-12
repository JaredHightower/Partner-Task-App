let express = require("express");
let router = express.Router();

let taskList = require("../models/taskList");

/* GET home page. */
router.get("/", function (req, res, next) {
  let usersTask = taskList.task;
  console.log(taskList.task[0]);
  res.render("index", { usersTask });
});

router.get("/home/:id", function (req, res, next) {
  let usersTask = taskList.task.find((listOutTask) => {
    return listOutTask.id === parseInt(req.params.id);
  });

  res.render("home", { usersTask });
});

module.exports = router;
