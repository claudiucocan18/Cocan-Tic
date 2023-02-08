<template>
  <div>
    <h1 class="title">Burse de merit</h1>
    <a href="./addstudent" class="bttn" v-if="this.tok != ''">Adauga student</a>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              NUME STUDENT
              <span> NOTA</span>
              <span>Telefon</span>
              <span>Email</span>
              <span></span>
            </li>

          </ul>

          <!-- ------------- -->
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="cv in vector"
              v-bind:key="cv.id">
              {{ cv.nume }}
              <span> {{ cv.nota }}</span>
              <span v-if="cv.contact"> {{ cv.contact.telefon }}</span>
              <span v-if="cv.contact"> {{ cv.contact.email }}</span>
              <span class="badge badge-primary badge-pill">
                <router-link :to="{ path: '/editstudent/'+cv.id}" class="btn btn-primary ml-2" v-if="this.tok != ''">
                  Edit
                </router-link>
                <a href="#" class="btn btn-danger"  @click="deleteStudent(cv.id)" >Delete</a>
              </span>
            </li>
          </ul>
<!-- v-if="this.tok != ''" -->
          <!-- <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="brs in burse">
              {{}}
              <span> 10</span>
              <span class="badge badge-primary badge-pill">
                <router-link :to="{ path: `/editStudent/2583` }" class="btn btn-primary ml-2">
                  Edit
                </router-link>
                <a href="#" class="btn btn-danger">Delete</a>
              </span>
            </li>
          </ul> -->

          <!------- <ul v-for="cv in fbBurseMerit" :key="cv.id">
            <li>
              {{ cv.done }}

            </li>
          </ul> -->



        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddStudent from "../views/AddStudent.vue";
import { ref, onMounted } from 'vue';

import { getAll } from '../../../Api/client'
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import db from '@/firebase';


const burseMerit = ref([]);


export default {
  data() {
    return {
      tok: '',
      vector: [],
      v: [],
      nr: [1, 2, 3]
    };
  },
  mounted() {

    this.checkIfLogged();
  },
  created() {
    this.loadVector();
    console.log("vectorullllllllll");
    console.log(this.vector);

  },
  methods: {
    checkIfLogged() {

      if (localStorage.getItem('token')) {
        this.tok = localStorage.getItem('token').toString();
      }
      else { this.tok = ""; }

      console.log('token=' + this.tok);
      console.log("Din checkif" + this.tok);

      if (this.tok == "") {
        console.log('true');
        return true;
      }
      else {
        console.log('false');
        return false;
      }

    },

    async loadVector() {
      this.vector = await this.fetchData();
      console.log("this.vector");
      console.log(this.vector);

    },

    async fetchData() {
      const dataArray = await axios.get('http://127.0.0.1:5001/cocan-tic/us-central1/app/getAll')

      console.log(dataArray.data);
      return dataArray.data;


    },
    async deleteStudent(idStudent) {
      console.log("Stergem " + idStudent);
      
     // this.$router.push("/delete");
      
      if(localStorage.getItem('token')&&localStorage.getItem('token')!="") {

        await axios.delete('http://127.0.0.1:5001/cocan-tic/us-central1/app/delete/' + idStudent)
      .then(() => {
        this.loadVector();
      });
          
      }
      else{

        this.$router.push("/login");
        console.log('Nu ai drept de stergere. Logheaza-te');

    }
    },
    

  },
}



</script>

<style scoped>
.title {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-block-start: 3rem;
}

.bttn {
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 1rem 35rem;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  text-align: center;
}

.bttn:hover {
  box-shadow: #12121209 0 0 0 3px, transparent 0 0 0 0;
}
</style>