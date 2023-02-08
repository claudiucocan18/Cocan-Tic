<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2 class="title">Adauga student</h2>
        </div>
        <form @submit.prevent="createStudent">
          <div class="form-group first">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Nume"
              v-model="student.nume"
              
            />
          </div>
          <!-- <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Prenume"
              v-model="prenume"
            /> -->
          <!-- </div> -->
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Nota"
              v-model="student.nota"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Telefon"
              v-model="student.contact.telefon"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Email"
              v-model="student.contact.email"
            />
          </div>
          <div class="btn-actions">
            <button class="btn" @click="createStud">Adauga</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

//import {login}  from '../../../Api/client';
import axios from 'axios';
 
export default{
data(){
  return{
    tok:"",
    student:{
      nume:"",
      nota:"",
      contact:{
        
        telefon:"",
        email:"",

      }
  }
  };
},
// created(){
//   this.loadAttr();
// },

methods:{
   createStud(){

    if(this.student.nume != "" && this.student.nota != ""){


      axios.post('http://127.0.0.1:5001/cocan-tic/us-central1/app/stud/create',this.student)
      .then(()=>{})
     
  }
    else alert("Introduceti toate datele solicitate");
},
  


},

};





// import burseColRef from "../firebase";
// import { addDoc } from "firebase/firestore";
// export default {
//   data() {
//     return {
//       nume: null,
//       prenume: null,
//       nota: null,
//     };
//   },
//   methods: {
//     async createStudent() {
//       console.log("Creating Document");
//       const addedDoc = await addDoc(burseColRef, this.$data);
//       console.log(addedDoc);
//     },
//   },
// };
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