import { RouterLink, RouterView } from "vue-router";
<template>
  <nav class="navbar">
    <img src="../../public/logo3.png" class="logo" />

    <ul class="link">
      <li class="link"><RouterLink to="/burse">Burse</RouterLink></li>
      <li class="link"><RouterLink to="/login">Login</RouterLink></li>
      <li><button class="btn" @click="logout">Logout</button></li>
    </ul>
  </nav>
</template>

<script>


export default {

  methods:{
    logout(){

      if(localStorage.getItem('token') && localStorage.getItem('token')!== ""){


      
      localStorage.removeItem('token');
      location.reload();
      //this.$router.push('/login');
      }
      else{
        console.log("Nu esti logat");
      }
    }
  }
};


</script>

<style scoped>
.logo {
  margin: 0;
  padding: 0;
  height: 3rem;
}

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background: #efefef;
  box-sizing: border-box;
  align-items: center;
}

.navbar ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  margin-block-start: 0.5rem;
  margin-block-end: 0;
  margin-inline: 0;
  padding: 0;
}

.link {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
}
.link a {
  color: rgb(99, 130, 196);
  font-weight: bold;
}
.link a:hover {
  background-color: transparent;
  color: #b327c5;
}
.title {
  margin-right: auto;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.2em;
  color: black;
}
@media screen and (min-width: 768px) {
  .logo {
    height: 4rem;
  }
  .navbar {
    display: flex;
    flex-direction: row;
    padding: 20px 10px;

    justify-content: space-between;
  }
  .link {
    display: flex;
    gap: 1rem;
    margin-inline-end: 3rem;
    font-size: 1.5rem;
  }
}
</style>