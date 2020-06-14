const https = require("https");
const URL_MOVIES = "https://jsonmock.hackerrank.com/api/movies";

class MovieService {
  allmovies = (req, res) => {
    const users = new Promise((resolve, reject) => {
      https
        .get(URL_MOVIES, (resp) => {
          let data = "";
          // A chunk of data has been recieved.
          resp.on("data", (chunk) => {
            data += chunk;
          });
          // The whole response has been received. Print out the result.
          resp.on("end", () => resolve(JSON.parse(data)));
        })
        .on("error", (err) => reject(err));
    });

    return users
      .then((result) => res.json(result))
      .catch((err) => res.send({ error: err }));
  };

  moviesByYear = (req, res) => {
    let year = req.params.year;
    const users = new Promise((resolve, reject) => {
      https
        .get(`${URL_MOVIES}/?Year=${year}`, (resp) => {
          let data = "";
          // A chunk of data has been recieved.
          resp.on("data", (chunk) => {
            data += chunk;
          });
          // The whole response has been received. Print out the result.
          resp.on("end", () => resolve(JSON.parse(data)));
        })
        .on("error", (err) => reject(err));
    });

    return users
      .then((result) => res.json(result))
      .catch((err) => res.send({ error: err }));
  };
}

module.exports = new MovieService()
