/*
 ** Count model
 */
var fs = require("fs");
const pathModule = require("path");
const txtToJson = require("../lib/txtToJson");

const Connection = require("../bin/connection");

class CountModel {
  ALL_COUNTS_QUERY = "SELECT * FROM count ORDER BY id";
  GET_COUNT_BY_ID_QUERY = "SELECT * FROM count WHERE id = ?";
  INSERT_COUNT_QUERY = `INSERT INTO count SET ?`;
  UPDATE_COUNT_QUERY = `UPDATE count SET ? WHERE id = ?`;
  DELETE_COUNT_QUERY = `DELETE FROM count WHERE  id = ?`;
  LOG_PATH = "./models/log.txt";

  log = (req, res) => {
    txtToJson(this.LOG_PATH).then(result => {
      res.status(200);
      res.json(result);
    });
  };

  saveLog = (req, res) => {
    fs.readFile(this.LOG_PATH, "utf8", (err, data) => {
      if (err) throw err;
      let date = new Date();
      let newData = { ...req.body, date};
      let newStr =
        data !== ""
          ? data + `\n${JSON.stringify(newData)}`
          : JSON.stringify(req.body);

      fs.writeFile(this.LOG_PATH, newStr, err => {
        if (err) console.log(err);
        txtToJson("./models/log.txt").then(result => {
          res.status(200);
          res.header({'access-control-allow-credentials':true})
          res.json(result);
        });
      });
    });
  };

  // allCounts = (req, res) => {
  //   // const promise = new Promise((resolve, reject) => {
  //   Connection.query(this.ALL_COUNTS_QUERY, (err, results) => {
  //     if (err) {
  //       return res.json(err);
  //     } else {
  //       return res.json(results);
  //     }
  //   });
  //   // });

  //   // return promise
  //   //   .then(result => {
  //   //     return res.json(result);
  //   //   })
  //   //   .catch(err => {
  //   //     console.log({ err });
  //   //     res.send({ error: err });
  //   //   });
  // };

  // getCountById = (req, res) => {
  //   const promise = new Promise((resolve, reject) => {
  //     Connection.query(
  //       this.GET_COUNT_BY_ID_QUERY,
  //       [req.params.id],
  //       (err, results) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(results);
  //         }
  //       }
  //     );
  //   });

  //   return promise.then(result => {
  //     return res
  //       .json({
  //         data: result,
  //         msg: `showing Count ${req.params.id}`,
  //         query: this.GET_COUNT_BY_ID_QUERY
  //       })
  //       .catch(err => {
  //         console.log({ err });
  //         res.send({ error: err });
  //       });
  //   });
  // };

  // insertCount = (req, res) => {
  //   const promise = new Promise((resolve, reject) => {
  //     Connection.query(this.INSERT_COUNT_QUERY, [req.body], (err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     });
  //   });
  //   return promise.then(result => {
  //     return res
  //       .json({
  //         data: result,
  //         body: req.body,
  //         query: this.INSERT_COUNT_QUERY
  //       })
  //       .catch(err => {
  //         console.log({ err });
  //         res.send({ error: err });
  //       });
  //   });
  // };

  // editCount = (req, res) => {
  //   const promise = new Promise((resolve, reject) => {
  //     Connection.query(
  //       this.UPDATE_COUNT_QUERY,
  //       [req.body, req.params.id],
  //       (err, results) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(results);
  //         }
  //       }
  //     );
  //   });
  //   return promise.then(result => {
  //     return res
  //       .json({
  //         data: result,
  //         body: req.body,
  //         query: this.UPDATE_COUNT_QUERY
  //       })
  //       .catch(err => {
  //         console.log({ err });
  //         res.send({ error: err });
  //       });
  //   });
  // };

  // removeCount = (req, res) => {
  //   const promise = new Promise((resolve, reject) => {
  //     Connection.query(
  //       this.DELETE_COUNT_QUERY,
  //       [req.params.id],
  //       (err, results) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(results);
  //         }
  //       }
  //     );
  //   });
  //   return promise.then(result => {
  //     return res
  //       .json({
  //         data: result,
  //         body: req.body,
  //         query: this.DELETE_COUNT_QUERY
  //       })
  //       .catch(err => {
  //         console.log({ err });
  //         res.send({ error: err });
  //       });
  //   });
  // };
}

module.exports = new CountModel();
