// Load Chance
const { default: axios } = require('axios');
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// Use Chance here.
var my_random_string = chance.string();
//const addDoc = require('\Frontend\node_modules\firebase\firestore');
//import {addDoc } from "firebase/firestore"; 
// const functions = require("firebase-functions");

// const admin = require("firebase-admin");

const genereaza = () =>{
  
    return {
      nota:chance.natural({ min: 8, max: 10 }),
      nume: chance.name(),
      contact: {
          telefon: chance.phone(),
          email: chance.email()
      }
  }
}


const datele = Array.from({length:10},genereaza);

function createStud(){

datele.forEach(el =>
     axios.post('http://127.0.0.1:5001/cocan-tic/us-central1/app/stud/createForChance',el)
// console.log(el)
)
 }
// addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });

// }
 createStud();
 console.log("S-a incarcat!");

//createStud();
// export default datele;
// module.exports = datele;