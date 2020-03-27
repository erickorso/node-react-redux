/*
** Count controller
*/ 
const CountModel = require("../models/CountModel");

class CountController {
  getCounts = (req, res) => {
    return CountModel.allCounts(req, res);
  };

  getCount = (req, res) => {
    return CountModel.getCountById(req, res);
  };

  newCount = (req, res) => {
    return CountModel.insertCount(req, res);
  };

  getLog = (req, res) => {
    return CountModel.log(req, res);
  };

  saveLog = (req, res) => {
    return CountModel.saveLog(req, res);
  };

  updateCount = (req, res) => {
    return CountModel.editCount(req, res);
  };

  deleteCount = (req, res) => {
    return CountModel.removeCount(req, res);
  };
}

module.exports = new CountController();