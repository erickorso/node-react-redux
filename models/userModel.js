/*
 ** user model
 */

const Connection = require("../bin/connection");

class UserModel {
  ALL_USERS_QUERY = "SELECT * FROM user ORDER BY id";
  GET_USER_BY_ID_QUERY = "SELECT * FROM user WHERE id = ?";
  INSERT_USER_QUERY = `INSERT INTO user SET ?`;
  UPDATE_USER_QUERY = `UPDATE user SET ? WHERE id = ?`;
  DELETE_USER_QUERY = `DELETE FROM user WHERE  id = ?`;

  allUsers = (req, res) => {
    const users = new Promise((resolve, reject) => {
      Connection.query(this.ALL_USERS_QUERY, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    return users
      .then((result) => res.json(result))
      .catch((err) => res.send({ error: err }));
  };

  getUserById = (req, res) => {
    const user = new Promise((resolve, reject) => {
      Connection.query(
        this.GET_USER_BY_ID_QUERY,
        [req.params.id],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });

    return user
      .then((result) =>
        res.json({
          data: result,
          msg: `showing user ${req.params.id}`,
          query: this.GET_USER_BY_ID_QUERY,
        })
      )
      .catch((err) => res.send({ error: err }));
  };

  insertUser = (req, res) => {
    const user = new Promise((resolve, reject) => {
      Connection.query(this.INSERT_USER_QUERY, [req.body], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    return user
      .then((result) =>
        res.json({
          data: result,
          body: req.body,
          query: this.INSERT_USER_QUERY,
        })
      )
      .catch((err) => res.send({ error: err }));
  };

  editUser = (req, res) => {
    const user = new Promise((resolve, reject) => {
      Connection.query(
        this.UPDATE_USER_QUERY,
        [req.body, req.params.id],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
    return user
      .then((result) =>
        res.json({
          data: result,
          body: req.body,
          query: this.UPDATE_USER_QUERY,
        })
      )
      .catch((err) => res.send({ error: err }));
  };

  removeUser = (req, res) => {
    const user = new Promise((resolve, reject) => {
      Connection.query(
        this.DELETE_USER_QUERY,
        [req.params.id],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
    return user
      .then((result) =>
        res.json({
          data: result,
          body: req.body,
          query: this.DELETE_USER_QUERY,
        })
      )
      .catch((err) => res.send({ error: err }));
  };
}

module.exports = new UserModel();
