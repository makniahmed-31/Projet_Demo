const express = require("express");
const assert = require("assert");
const cors = require("cors");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const MongoURL = "mongodb://localhost:27017";
const dbName = "Jufré";
MongoClient.connect(MongoURL, { useNewUrlParser: true }, (err, client) => {
  assert.equal(err, null, "connection failed");
  console.log("success of connection between db and server");
  var db = client.db(dbName);

  app.post("/Users", (req, res) => {
    const body = req.body;
    db.collection("Users").insertOne(body, (err, data) => {
      if (err) {
        res.status(400).send("failed to insert");
      } else {
        res.status(201).send(body);
      }
    });
  });

  app.post("/Commande", (req, res) => {
    const body = req.body;
    db.collection("Commande").insertOne(body, (err, data) => {
      if (err) {
        res.status(400).send("failed to insert");
      } else {
        res.status(201).send(body);
      }
    });
  });

  app.post("/Products", (req, res) => {
    const body = req.body;
    db.collection("Products").insertOne(body, (err, data) => {
      if (err) {
        res.status(400).send("failed to insert");
      } else {
        res.status(201).send(body);
      }
    });
  });

  app.get("/All_Commande", (req, res) => {
    db.collection("Commande")
      .find()
      .toArray((err, data) => {
        if (err) {
          res.status(404).send("could not fetch data");
        } else {
          res.send(data);
        }
      });
  });

  app.get("/All_Users", (req, res) => {
    db.collection("Users")
      .find()
      .toArray((err, data) => {
        if (err) {
          res.status(404).send("could not fetch data");
        } else {
          res.send(data);
        }
      });
  });

  app.get("/Products", (req, res) => {
    db.collection("Products")
      .find()
      .toArray((err, data) => {
        if (err) {
          res.status(404).send("could not fetch data");
        } else {
          res.send(data);
        }
      });
  });
});

app.listen("4000", () => {
  console.log("connection a port 4000");
});
