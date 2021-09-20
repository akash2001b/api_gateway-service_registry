const express = require("express");
const axios = require("axios");
const registry = require("./registry.json");
const fs = require("fs");

const router = express.Router();

router.all("/:apiName/:path", (req, res, next) => {
  console.log("the api name", req.params.apiName);
  if (registry.services[req.params.apiName]) {
    axios({
      method: req.method,
      url: registry.services[req.params.apiName].url + req.params.path,
      headers: req.headers,
      data: req.body,
    }).then((response) => {
      res.send(response.data);
    });
  } else {
    res.send("Api Name doesn't exist");
  }
});

router.post("/register", (req, res, next) => {
  const registrationInfo = req.body;
  registrationInfo.url =
    registrationInfo.protocol +
    "://" +
    registrationInfo.host +
    ":" +
    registrationInfo.port +
    "/";

  if (apiAlreadyExists(registrationInfo)) {
    // if api already exist
    res.send("Configuration already exists for " + registrationInfo.url);
  } else {
    // console.log("123");

    registry.services[registrationInfo.apiName].push({ ...registrationInfo });
    fs.writeFile("./routes/registry.json", JSON.stringify(registry), (err) => {
      if (err) {
        res.send("could not register " + registrationInfo.apiName + "\n" + err);
      } else {
        res.send("successfully registered " + registrationInfo.apiName);
      }
    });
  }
});

const apiAlreadyExists=(registrationInfo)=>{
  let exists=false;
  registry.services[registrationInfo.apiName].forEach(instance =>{
    if(instance.url===registrationInfo.url){
      exists=true;
      return;
    }
  })
  return exists;
};

module.exports = router;
