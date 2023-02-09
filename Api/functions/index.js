const functions = require("firebase-functions");

const admin = require("firebase-admin");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');



const serverSecret = 'secret';
//import axios from "axios";

var serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let users = [];

// var users = [{
//   emailAddress:'secretariat@csie.ro',
//   password:'parola',
//   //token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoic2VjcmV0YXJpYXRAY3NpZS5ybyIsImlhdCI6MTY3NTY3MTUwMCwiZXhwIjoxNjc1Njc1MTAwfQ.iJ6do0oRULZxNlkjR0aPV40WMc1U4NDRJzUOOUoW9tg',
// }];

const express = require("express");
const cors = require("cors");

const { getFirestore } = require('firebase-admin/firestore');
//const { getUserState } = require("../../Frontend/src/firebase");

const dbFirebase = getFirestore();

//Main App
const app = express();
app.use(cors({ origin: true }));

//Main database reference
const db = admin.firestore();

//Routes
app.get("/", (req, res) => {
  return res.status(200).send("Hi!");
});




//tutorial yt
// app.get("/api/getAll", (req, res) => {

// const colRef = collection(db,'bursaMerit');

// getDocs(colRef)
// .then((snapshot) => {
//   let books = [];
//   snapshot.docs.forEach((doc) =>{
//   books.push({...doc.data(),nume: doc.nume, nota: doc.nota})
// })
// console.log(books);
// })
// .catch(err=> {
//   console.log(err.message);
// })
// });

//LP//bun pprecedent-------------------
// app.get("/getAll", (req, res) => {
//   // res.status(200);
//   // res.send(db);
//   const tasks = [];
//   dbFirebase
//     .collection('bursaMerit')
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         tasks.push({ nota: doc.nota, nume: doc.nume, ...doc.data() });
//       });
//       res.status(200);
//       res.send(tasks);
//     })
//     .catch((err) => {
//       console.log('Error getting documents', err);
//     });
// });

app.get("/getAll", (req, res) => {
  // res.status(200);
  // res.send(db);
  let tasks = [];
  dbFirebase
    .collection('burseMerit')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        tasks.push({ nota: doc.nota, nume: doc.nume, id: doc.id, contact: doc.contact, ...doc.data() });

      });
      console.log("Vectorul din api" + tasks);
      //res.json(tasks);
      res.status(200);
      res.send(tasks);

    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
});

app.get("/getAllinitial", (req, res) => {
  // res.status(200);
  // res.send(db);
  let tasks = [];
  dbFirebase
    .collection('burseMerit')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        tasks.push({ nota: doc.nota, nume: doc.nume, id: doc.id, ...doc.data() });

      });
      console.log("Vectorul din api" + tasks);
      //res.json(tasks);
      res.status(200);
      res.send(tasks);

    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
});


app.delete("/delete/:id", (req, res) => {
  (async () => {
    try {
      console.log(req.params.id);
      const reqDoc = db.collection("burseMerit").doc(req.params.id);

      await reqDoc.delete();

      return res.status(200).send({ status: "Success", msg: "Data Removed" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Failed", msg: error });
    }
  })();


});


//   (async () => {
//     try {
//       const query = db.collection("bursaMerit");
//       let response = [];

//       await query.get().then((data) => {
//         let docs = data.docs;

//         docs.map((doc) => {
//           const selectedItem = {
//             nume: doc.data().nume,
//             nota: doc.data().nota,
//           };
//           response.push(selectedItem);
//         });
//         return response;
//       });

//       return res.status(200).send({ status: "Success", data: response });

//     } catch (error) {
//       console.log(error);
//       return res.status(500).send({ status: "Failed", msg: error });
//     }
//   })();
// });





//Create -> post()
app.post("/stud/create", (req, res) => {
  (async () => {
    try {
      await db.collection("burseMerit").doc(`/${Date.now()}`).create({
        id: Date.now(),
        nume: req.body.nume,
        nota: req.body.nota,
        contact: req.body.contact,
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
app.get("/get/:id", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("burseMerit").doc(req.params.id);
      let userDetail = await reqDoc.get();
      let response = userDetail.data();
      console.log(response);

      //return res.status(200).send({ status: "Success", data: response });

      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

// //Fetch - All the details from firestore
// app.get("/api/getAll", (req, res) => {
//   (async () => {
//     try {
//       const query = db.collection("bursaMerit");
//       let response = [];

//       await query.get().then((data) => {
//         let docs = data.docs;

//         docs.map((doc) => {
//           const selectedItem = {
//             nume: doc.data().nume,
//             nota: doc.data().nota,
//           };
//           response.push(selectedItem);
//         });
//         return response;
//       });

//       return res.status(200).send({ status: "Success", data: response });

//     } catch (error) {
//       console.log(error);
//       return res.status(500).send({ status: "Failed", msg: error });
//     }
//   })();
// });




//Update -> put()
app.put("/update/:id", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("burseMerit").doc(req.params.id);
      await reqDoc.update({
        nume: req.body.nume,
        nota: req.body.nota,
        contact: req.body.contact,

      });

      return res.status(200).send({ status: "Success", msg: "Data Saved" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});


//exemplar bun de delete conservat
//Delete -> delete()
// app.delete("/api/delete/:id", (req, res) => {
//   (async () => {
//     try {
//       const reqDoc = db.collection("burseMerit").doc(req.params.id);
//       await reqDoc.delete();

//       return res.status(200).send({ status: "Success", msg: "Data Removed" });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send({ status: "Failed", msg: error });
//     }
//   })();
// });


//login

 app.post('/login', async(req, res) => {

  //syncUSers();

  users = await loadVector();
  
 // users = u;
  console.log("users de sus");
      console.log(users);





  let loginData = req.body;
  console.log('vrei sa te autentifici cu ', loginData);

  console.log('USRS  ' + loginData.emailAddress);



  let response = {};
  response.success = false;

  const user = users.find((user) => user.emailAddress == loginData.emailAddress);

  //signInWithEmailAndPassword(auth, email.value, password.value);


  // console.log('USRS2  '+users); 
  // console.log('USRS3  '+user.password);
  // console.log('USRS4  '+user.emailAddress);
  // console.log('USRS5pass  '+loginData.password);
  // console.log('USRS5email  '+loginData.emailAddress);

  if (user == undefined) {
    response.user = false;
    console.log('utilizatorul nu exista');
    // res.status=400;
    // res.send();
    // throw new Error(400,"Email este gresit");

  } else {



    // bcrypt.compare(loginData.password, user.password, function (err, result) {
    //   if (result) {
    if (loginData.password == user.password) {
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
      // res.status=200;
      res.send({ token });
    } else {
      console.log('parola este gresita');
      // res.status=400;
      // res.send();
      // throw new Error(400,"Parola este gresita");

    }
  }

});
// res.send(response)


// let token = req.headers['authorization'];

// if (token) {
//   jwt.verify(token, serverSecret, (err, decode));

//   if (err) {
//     if (err.expiredAt) {
//       console.log('Tokenul tau a expirat!');
//       res.status(403);
//       res.send('expiredToken');
//     } else {
//       console.log('Tokenul tau nu e bun');
//       res.status(403);
//       res.send('brokenToken');
//     }
//   } else {
//     console.req.email = decoded;
//     next();
//   }

//   next();
// } else {
//   res.status(401);
// }

// next();
//}

// app.post('/verificare', (req, res) => {
//   let tok = req.body;
//   console.log("sd"+tok);
//   //let response = {};
//  // response.success = false;


//   let verificare = verificareToken(tok)

//       if(verificare){
//         console.log('trecut de if');


//         res.send(verificare);
//       } else {
//         console.log('parola este gresita');
//       }
//     }

// );

//node js exports https://stackify.com/node-js-module-exports/

function verificareToken(token) {
  // let token = localStorage.getItem('token');
  console.log('Token din verif' + token);

  if (token) {
    jwt.verify(token, 'secret', (err, decode));

    if (err) {
      if (err.expiredAt) {
        console.log('Tokenul tau a expirat!');
        return false;
      } else {
        console.log('Tokenul tau nu e bun');
        return false;
      }
    } else {
      console.req.email = decoded;
      return true;
    }

  } else {
    return false;
  }

}


 async function syncUSers() {
  let usr=[];
   await dbFirebase
    .collection('users')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        // console.log("doc.data()");
        // console.log(doc.data());
        usr.push({ emailAddress: doc.data().emailAddress, password: doc.data().password })});

      })
      // console.log("users");
      // console.log(users);
      return usr;

    };

    async function loadVector() {
      let us = await syncUSers();
      // console.log("this.vector");
      // console.log(this.vector);
      return us;

    }

    

  //console.log(users);



module.exports.app = functions.https.onRequest(app);

// .collection('burseMerit')
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         tasks.push({ nota: doc.nota, nume: doc.nume,id: doc.id, contact: doc.contact, ...doc.data() });

//,id: doc.id, contact: doc.contact, ...doc.data()