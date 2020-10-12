const router = require("express").Router();
const fetch = require("node-fetch");
require("dotenv").config();

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
let apiToken;

//Petfinder's token expires after 1 hour
//getToken gets a new token if there is no token
//or the previous one expired
const getToken = async () => {
  if (apiToken) {
    return apiToken;
  } else {
    try {
      const result = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
      })
        .then((res) => res.json())
        .then((json) => {
          apiToken = json.access_token;
        });

      setTimeout(() => {
        apiToken = null;
      }, 1000 * 60 * 30);

      return apiToken;
    } catch (err) {
      console.log(err);
    }
  }
};

// GET /api/petfinder/
// Returns a list of 20 random animals
router.route("/").get(async (req, res) => {
  const token = await getToken();

  const result = await fetch("https://api.petfinder.com/v2/animals", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  res.send(result);
});

//GET /api/petfinder/filter/:type
//Filter by selected type
router.route("/filter/:type").get(async (req, res) => {
  const token = await getToken();
  const type = req.params.type;

  const result = await fetch(
    `https://api.petfinder.com/v2/animals?type=${type}`,
    {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  res.send(result);
});

module.exports = router;
