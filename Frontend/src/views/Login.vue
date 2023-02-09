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


import { def } from '@vue/shared';
import {login}  from '../../../Api/client';

 
export default{
data(){
  return{
    tok:"",
    campEmail:"",
    campParola:"",
    //authenticated:false,
  };
},
// created(){
//   this.loadAttr();
// },

methods:{
    async loadAttr(){
  
     await login(this.campEmail, this.campParola);
     
     if (localStorage.getItem("token")) {
              this.tok = localStorage.getItem("token").toString();
            } else {
              this.tok = "";
            }

            console.log("e rau rau"+this.tok);
          
            
      if (this.tok && this.tok != "") {
        this.$router.push("/burse");
      } else {
        alert("Credentiale invalide");
        console.log("Autentificare nereusita!");
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
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.62rem;
  text-align: center;
  padding: 0;
  margin: 1rem;
}
.login-form {
  height: 25rem;
  width: 18rem;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 0.6rem;
  backdrop-filter: blur(10px);
  border: 0.12rem solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 2.5rem rgba(8, 7, 16, 0.6);
  padding: 1rem;
  margin: 19rem auto;
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
  margin-top: 1.8rem;
  font-size: 0.9rem;
  font-weight: 500;
}
.login-form input {
  display: block;
  height: 2rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 0.1rem;
  padding: 0 10px;
  margin-top: 0.6rem;
  font-size: 0.8rem;
  font-weight: 300;
  border: solid #4e4e4e21;
}
::placeholder {
  color: #e5e5e5;
}
.btn {
  margin-top: 1.7rem;
  text-align: center;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 0.9rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.3rem;
  cursor: pointer;
}
.btn:hover {
  background-color: #308dcc;
}
@media screen and (min-width: 1024px) {
  .title {
    font-size: 2rem;
  }
  .background {
    width: 26.8rem;
    height: 32.5rem;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  .background .shape {
    height: 12.5rem;
    width: 12.5rem;
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
    padding: 3.1rem 2.1rem;
    margin: 23rem auto;
  }
  .login-form label {
    font-size: 1rem;
  }
  .login-form input {
    height: 3.1rem;
  }
  .btn {
    margin-top: 3.1rem;
  }
}
</style>