const functions = require("firebase-functions");

const admin = require("firebase-admin");
const bcrypt= require("bcrypt")
const jwt = require('jsonwebtoken');

const serverSecret = 'secret';
//import axios from "axios";

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


var users = [{
  emailAddress:'secretariat@csie.ro',
  password:'parola'
}];

const express = require("express");
const cors = require("cors");

//Main App
const app = express();
app.use(cors({ origin: true }));

//Main database reference
const db = admin.firestore();

//Routes
app.get("/", (req, res) => {
  return res.status(200).send("Hi!");
});

//Create -> post()
app.post("/api/create", (req, res) => {
  (async () => {
    try {
      await db.collection("userDetails").doc(`/${Date.now()}`).create({
        id: Date.now(),
        name: req.body.name,
        mobile: req.body.mobile,
        address: req.body.address,
      });
      return res.status(200).send({ status: "Success", msg: "Data Saved" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

//Get -> get()
//Fetch - Single Data from firestore using specific ID
app.get("/api/get/:id", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("userDetails").doc(req.params.id);
      let userDetail = await reqDoc.get();
      let response = userDetail.data();

      return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

//Fetch - All the details from firestore
app.get("/api/getAll", (req, res) => {
  (async () => {
    try {
      const query = db.collection("userDetails");
      let response = [];

      await query.get().then((data) => {
        let docs = data.docs;

        docs.map((doc) => {
          const selectedItem = {
            name: doc.data().name,
            mobile: doc.data().mobile,
            address: doc.data().address,
          };
          response.push(selectedItem);
        });
        return response;
      });

      return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

//Update -> put()
app.put("/api/update/:id", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("userDetails").doc(req.params.id);
      await reqDoc.update({
        name: req.body.name,
        mobile: req.body.mobile,
        address: req.body.address,
      });

      return res.status(200).send({ status: "Success", msg: "Data Saved" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});
//Delete -> delete()
app.delete("/api/delete/:id", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("userDetails").doc(req.params.id);
      await reqDoc.delete();

      return res.status(200).send({ status: "Success", msg: "Data Removed" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});


//login

app.post('/login', (req, res) => {
  let loginData = req.body;
  console.log('vrei sa te autentifici cu ', loginData);

  console.log('USRS  '+loginData.emailAddress);

  let response = {};
  response.success = false;
  
  const user = users.find((user) => user.emailAddress === loginData.emailAddress);

  console.log('USRS2  '+users);
  console.log('USRS3  '+user.password);
  console.log('USRS4  '+user.emailAddress);
  console.log('USRS5  '+loginData.password);
  console.log('USRS5  '+loginData.emailAddress);

  if (user === undefined) {
    response.user = false;
    console.log('utilizatorul nu exista');

   
  } else {

    // bcrypt.genSalt(function(err, salt) {
    //   bcrypt.hash(user.password, salt, function(err, hash) {
    //   // returns hash
    //   user.password=hash;
    //   });
    // });

    // bcrypt.compare(loginData.password, user.password, function (err, result) {
    //   if (result) {
      if(loginData.password==user.password){
        console.log('trecut de if');
        // sign a jwtWebToken using the jwt package
        // -> this token will be used 2 ways for authorization
        let token = jwt.sign(
          {
            data: user.emailAddress,
          },
          serverSecret,
          { expiresIn: '1h' }
        );

        console.log('Tokenul tau este: ', token);

        //localStorage.setItem("token", token);

        res.send({ token });
      } else {
        console.log('parola este gresita');
      }
    }
  
});
  // res.send(response)



exports.app = functions.https.onRequest(app);
