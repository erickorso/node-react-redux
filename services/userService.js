const https = require("https");
// const URL_PLANETARIO = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
// const URL_MOVIES = "https://jsonmock.hackerrank.com/api/movies?Year=1999";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";

class UserService {

  allUsers = (req, res) => {
    const users = new Promise((resolve, reject) => {
      https
        .get(URL_USERS, (resp) => {
          let data = "";
          // A chunk of data has been recieved.
          resp.on("data", (chunk) => {
            data += chunk;
          });
          // The whole response has been received. Print out the result.
          resp.on("end", () => resolve(JSON.parse(data)));
        })
        .on("error", (err) => reject(err));
    })

    return users
      .then((result) => res.json(result))
      .catch((err) => res.send({ error: err }))
  }

}

module.exports = new UserService()
