var express = require('express');
var router = express.Router();
const UserController = require("../controllers/UserController");

/* GET users listing. */
router.get('/', (req, res)  => UserController.getUsers(req, res))

router.get('/service', (req, res)  => UserController.getUsersService(req, res))

router.post("/", (req, res) => UserController.newUser(req, res));

router.get("/:id", (req, res) => UserController.getUser(req, res));

router.put("/:id", (req, res) => UserController.updateUser(req, res));

router.delete("/:id", (req, res) => UserController.deleteUser(req, res));

module.exports = router;
