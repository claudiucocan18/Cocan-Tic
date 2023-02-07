<template>
  
<div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div>

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

    
      

      <button class="btn" @click="loadAttr" >Login</button>
      
  

  </form>

</template>

<script type="module">

//function dct(){};

//var login = require('C:/Users/Claudiu/Desktop/Cocan Tic/Api/client');

import { def } from '@vue/shared';
import {login}  from '../../../Api/client';

 
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
  

  
},

};




</script>

<style scoped>
.title {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}
.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -5rem;
  top: 25rem;
  opacity: 0.2;
}
.shape:last-child {
  background: linear-gradient(to right, #b327c5, #7d19f0);
  right: -5rem;
  bottom: -25rem;
  opacity: 0.2;
}
.login-form {
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  margin: 23rem auto;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #585858;
  letter-spacing: 0.5px;
  outline: none;
}
.div-form {
  margin: 0.5rem 0;
  padding: 0 1rem;
}
.login-form label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
.login-form input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  border: solid #4e4e4e21;
}
::placeholder {
  color: #e5e5e5;
}

.btn {
  margin-top: 50px;
  text-align: center;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #308dcc;
}
</style>