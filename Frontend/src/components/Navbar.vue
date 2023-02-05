import { RouterLink, RouterView } from "vue-router";
<template>
  <nav class="navbar">
    <ul class="link">
      <img src="../../public/logo3.png" class="logo" />
      <li class="link"><RouterLink to="/burse">Burse</RouterLink></li>
      <li class="link"><RouterLink to="/login">Login</RouterLink></li>
      <li><RouterLink to="/signup">Sign Up</RouterLink></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  margin: 0 16rem 0 0;
  padding: 0rem;
  height: 4rem;
}
.navbar {
  width: 100vw;
  background: #efefef;
  padding: 20px 10px;
  box-sizing: border-box;
}

.navbar ul {
  display: flex;
  max-width: 960px;
  align-items: center;
  list-style-type: none;
}

.link {
  display: flex;
  gap: 2rem;
}
.link a {
  color: rgb(99, 130, 196);
  font-weight: bold;
}
.title {
  margin-right: auto;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.2em;
  color: black;
}
</style>
