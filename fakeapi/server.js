const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3002;
const HOST='localhost'

app.use(express.json());
app.get("/fakeapi", (req, res, next) => {
  res.send("hello from fake server");
});
app.post("/bogusapi", (req, res, next) => {
  res.send("bogus api server");
});

app.get("/registrytest", (req, res, next) => {
  res.send("registrytest api");
});

app.listen(PORT, () => {
  axios({
    method: "POST",
    url: "http://localhost:3000/register",
    headers: { "Content-Type": "application/json" },
    data: {
      apiName: "testapi",
      protocol:"http",
      host: HOST,
      port: PORT,
    },
  }).then((response) => {
    console.log(response.data);
  });
  console.log("fake server started on port " + PORT);
});
