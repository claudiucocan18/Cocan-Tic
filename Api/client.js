var globalRequestParameters = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
  };

  import axios from "axios";
  //import { RouterLink, RouterView } from "vue-router";
 // const jwt = require('jsonwebtoken');
  
const baseURL = 'http://127.0.0.1:5001/cocan-tic/us-central1/app/';

// /http://localhost:5001/
// const ob = {
//   flog :


 function login(loginEmail, loginPassword) {
  axios
        .post("http://127.0.0.1:5001/cocan-tic/us-central1/app/login", {
          emailAddress: loginEmail,
          password: loginPassword
        }).then(res => {
          if (res.data.token) {
              localStorage.setItem('token', JSON.stringify(res.data.token));
              console.log("Mister "+ res.data)
              
          }
          else //alert('Hello, World!');

          console.log(localStorage.getItem('token'));
          this.$router.push("/burse"); 
        }).catch(error => {
            // Handle error
            console.error(error);
            
          });

          
        // .then((res) => {
        //   let s = (...res)=> {s.token};
           // token: res.data.token
      //    });

          // const now = new Date();
          // const expirationDate = new Date(
          //   now.getTime() + res.data.expiresIn * 1000
          // );

          //console.log("spatii"+token);
          // localStorage.setItem("token", res.data.idToken);
          // localStorage.setItem("userId", res.data.localId);
          // localStorage.setItem("expirationDate", expirationDate);
          
}


// function verificareToken(token) {

//   console.log("este in verificare token")

//   axios
//   .post("http://127.0.0.1:5001/cocan-tic/us-central1/app/verificare", {
//     token: token,
//   }).then(res => {
//     if (res.verificare) {
//         return JSON.stringify(res.verificare);
     
//     }

// })
// }




 function login2(loginEmail, loginPassword) {
    console.log("Login func")
  let parameters = { ...globalRequestParameters }; // shallow object clone
    parameters.method = 'POST';
    parameters.body = JSON.stringify({
      loginEmail: loginEmail,
      loginPassword: loginPassword,
    });
    console.log("Login func2")
    fetch(baseURL + 'login', parameters)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          // if authentication was successful, store the token in the browser's local storage
          localStorage.setItem('token', data.token);
        } else {
          console.log('Authentication failed');
        }
      });
      console.log("Login func3")
  }
//};



export{
  login,
}
//export default ob;
// module.exports = {
//   login
// }


  // export default{
  //   methods:{
  //     login
  //   }
  // }