/*
** user controller
*/ 
const UserModel = require("../models/UserModel");
const UserService = require("../services/UserService");

class UserController {

  getUsers = (req, res) => {
    return UserModel.allUsers(req, res);
  };

  getUsersService = (req, res) => {
    return UserService.allUsers(req, res);
  };

  getUser = (req, res) => {
    return UserModel.getUserById(req, res);
  };

  newUser = (req, res) => {
    return UserModel.insertUser(req, res);
  };

  updateUser = (req, res) => {
    return UserModel.editUser(req, res);
  };

  deleteUser = (req, res) => {
    return UserModel.removeUser(req, res);
  };
  
}

module.exports = new UserController();