<template>
  <div>
    <h1 class="title">Burse de merit</h1>
    <a href="./addstudent" class="bttn" v-if= "this.tok != ''" >Adauga student</a>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              NUME STUDENT
              <span> NOTA</span>
              <span></span>
              <span></span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Cocan Claudiu
              <span> 10</span>
              <span class="badge badge-primary badge-pill">
                <router-link
                  :to="{ path: `/editStudent/2583` }"
                  class="btn btn-primary ml-2"
                >
                  Edit
                </router-link>
                <a href="#" class="btn btn-danger">Delete</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddStudent from "../views/AddStudent.vue";
//const jwt = require('jsonwebtoken');
//import {verificareToken}  from '../../../Api/functions/index';
import {getAll} from '../../../Api/client'
//const myFunction = require('./module');
// export default{
// data(){
//   return{
//   };
// },
// created(){
//   this.verifyToken();
// },
//import {verificareToken}  from '../../../Api/client';
export default {
  data() {
    return {
      tok: ''
    };
  },
  mounted() {

  this.checkIfLogged();

  },
  created(){
  // this.checkIfLogged(this.tok);
  console.log("created");
  getAll();
  },
  methods: {
    checkIfLogged() {

      if(localStorage.getItem('token')){
         this.tok = localStorage.getItem('token').toString();
      }
      else {this.tok = "";}
      
      console.log('token='+ this.tok);
      console.log("Din checkif"+this.tok);

      if(this.tok=="")
        { console.log('true');
        return true;
      }
      else { 
        console.log('false');
        return false;
      }
     
        }
    }
  };


// methods:{

//   loadAttr2(){
    
//     verifyToken();
//   },

// },

//};

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