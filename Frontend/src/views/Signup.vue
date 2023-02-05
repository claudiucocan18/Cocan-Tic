<template>
  <form @submit.prevent="submitForm" class="login-form">
    <h2 class="title">Sign Up</h2>

    <div class="div-form">
      <label for="email">E-Mail</label>
      <input type="email" />
    </div>
    <div class="div-form">
      <label for="password">Password</label>
      <input type="password" />
    </div>
    <div class="btn-actions">
      <button class="btn">Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {};
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
