var express = require('express');
var router = express.Router();
const CountController = require("../controllers/CountController");

router.get('/', (req, res)  => CountController.getCounts(req, res))

router.post("/", (req, res) => CountController.newCount(req, res));

router.get("/log", (req, res) => CountController.getLog(req, res));

router.post("/saveLog", (req, res) => CountController.saveLog(req, res));

router.get("/:id", (req, res) => CountController.getCount(req, res));

router.put("/:id", (req, res) => CountController.updateCount(req, res));

router.delete("/:id", (req, res) => CountController.deleteCount(req, res));

module.exports = router;
