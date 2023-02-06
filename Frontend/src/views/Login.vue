<template>
  <form @submit.prevent="submitForm" class="login-form">
    <h2 class="title">Login</h2>

    <div class="div-form">
      <label for="email">E-Mail</label>
      <input type="email" v-model="campEmail" />
    </div>

    <div class="div-form">
      <label for="password">Password</label>
      <input type="password" v-model="campParola" />
    </div>

    <div class="btn-actions">
      

      <button class="btn" @click="loadAttr" >Login</button>
      
      
    </div>

  </form>

</template>

<script type="module">

//function dct(){};

//var login = require('C:/Users/Claudiu/Desktop/Cocan Tic/Api/client');

import { def } from '@vue/shared';
import {login}  from '../../../Api/client';
//import {checkRedirect}  from '../../../Api/client';
//import {verifyToken} from '../../../Api/client'
 
export default{
data(){
  return{
    tok:"",
    campEmail:"",
    campParola:"",
  };
},
// created(){
//   this.loadAttr();
// },

methods:{
   loadAttr(){
    //this.loginEmail="secretariat@csie.ro";
    //this.loginPassword="parola";
    //const obj = login();
    
   // this.$router.push("/burse");

   
     login(this.campEmail, this.campParola);

     if (localStorage.getItem("token")) {
              this.tok = localStorage.getItem("token").toString();
            } else {
              this.tok = "";
            }

            console.log("e rau rau"+this.tok);
      
      if (this.tok != "") {
        this.$router.push("/burse");
      } else {
        alert("Autentificare nereusita!");
        this.$router.push("/login");
      }

    // checkRedirect(this.tok);
     
    // verifyToken();
  },
  

  // checkRedirect(){
  //   if (localStorage.getItem("token")) {
  //       this.tok = localStorage.getItem("token").toString();
  //     } else {
  //       this.tok = "";
  //     }
  //     if (this.tok != "") {
  //       this.$router.push("/burse");
  //     } else {
  //       this.$router.push("/login");
  //     }
  // },
},

};

//import ob from 'C:/Users/Claudiu/Desktop/Cocan Tic/Api/client';
//const exportat = require("C:/Users/Claudiu/Desktop/Cocan Tic/Api/client");
 //document.getElementById('submit1').addEventListener('click', login());

// import login from 'C:/Users/Claudiu/Desktop/Cocan Tic/Api/client';
 
// export default {
//   components:{ 
//     ob
//   },
// }


// export default {
//   data() {
//     return {
//       ob: flog()
//     }
//   }
// }


</script>

<style scoped>

.title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: rgb(64, 155, 143);
}
.login-form {
  margin: 60px auto;
  padding: 20px;
  background: rgba(201, 214, 214, 0.288);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.7px);
  -webkit-backdrop-filter: blur(13.7px);
  border: 1px solid rgba(231, 214, 214, 0.83);
}
.div-form {
  margin: 0.5rem 0;
  padding: 0 1rem;
}
.login-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: rgb(121, 116, 116);
}
.login-form input {
  padding: 0.5rem 4rem;
  margin-bottom: 0.5rem;
  font-size: 1em;
  color: #777;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.144);
  border: 0.1rem solid white;
}
.btn-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7rem;
}
.btn {
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 1.5rem 0 0 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  border: 0;
}

.btn:hover {
  background-color: rgb(64, 155, 143);
}
</style>
