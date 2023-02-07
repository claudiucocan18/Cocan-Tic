<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2 class="title">Editeaza student</h2>
        </div>
        <form>
          <div class="form-group first">
            <label for="">Nume</label>
            <input type="text" class="form-control mb-2" />
          </div>
          <div class="form-group">
            <label for="">Prenume</label>
            <input type="text" class="form-control mb-2" />
          </div>
          <div class="form-group">
            <label for="">Nota</label>
            <input type="text" class="form-control mb-2" />
          </div>
          <div class="btn-actions">
            <button class="btn">Modifica</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  

<script>

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


  },
  


},

};




</script>


  <style>
  .title {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    margin-block-start: 3rem;
  }
  .form-group {
    padding: 0 15rem;
    margin: 1.2rem 1rem;
  }
  .first {
    margin-block-start: 3rem;
  }
  .btn-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30rem;
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
  
 