var globalRequestParameters = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
  };

  import axios from "axios";

  let requestOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };
  
  //import { RouterLink, RouterView } from "vue-router";
 // const jwt = require('jsonwebtoken');
  
const baseURL = 'http://127.0.0.1:5001/cocan-tic/us-central1/app/';

// /http://localhost:5001/
// const ob = {
//   flog :


 function login(loginEmail, loginPassword) {
  axios
        .post("http://127.0.0.1:5001/cocan-tic/us-central1/app/login", {
          emailAddress: loginEmail,
          password: loginPassword
        }).then(res => {
          if (res.data.token) {
              localStorage.setItem('token', JSON.stringify(res.data.token));
              console.log("Mister "+ res.data);
              console.log("TOKEN after api: "+JSON.stringify(res.data.token).toString());//+JSON.stringify(res.data.token)
              //this.$router.push("/burse");
          }
         
          else //alert('Hello, World!');
           console.log("Eroareeee");
          // console.log(localStorage.getItem('token'));
          
        }).catch(error => {
            // Handle error
            console.error(error);
            
          });

        }
        



function getAll(){

  console.log("a intrat");
        fetch("http://127.0.0.1:5001/cocan-tic/us-central1/app/getAll", requestOptions)
        .then((res) => {
          if (res.status === 200) {
            console.log('Mesaj');
            return res.json();
          } else {
            console.log('A aparut o eroare');
          }
        })
        .then((res) => {
          if (res === undefined) {
            console.log('Serverul nu a returnat nimic');
          } else {
            res.forEach((elem) => {
              console.log(elem);
              //addStudToUI(elem);
            });
          }
        });

      }

function addStudToUI(elem) {
  let task = document.createElement('li');

  let taskContainer = document.createElement('div');
  let taskName = document.createTextNode(elem.taskName);
  taskContainer.appendChild(taskName);

  task.appendChild(taskContainer);
  let taskStatus = document.createElement('div');
  let taskStatusText = document.createTextNode('Status: ' + elem.status);
  taskStatus.appendChild(taskStatusText);
  task.appendChild(taskStatus);

  let deleteTaskButton = document.createElement('button');
  let deleteTaskButtonText = document.createTextNode('Delete');
  deleteTaskButton.appendChild(deleteTaskButtonText);
  deleteTaskButton.id = 'DEL_BTN_' + elem.id;
  deleteTaskButton.className = 'DEL_BTN';
  deleteTaskButton.addEventListener('click', deleteToDo);
  task.appendChild(deleteTaskButton);

  let updateTaskButton = document.createElement('button');
  let updateTaskButtonText = document.createTextNode('Update');
  updateTaskButton.appendChild(updateTaskButtonText);
  updateTaskButton.id = 'UPT_BTN_' + elem.id;
  task.appendChild(updateTaskButton);

  task.id = elem.id;
  task.className = 'task';

  document.getElementById('myTasks').appendChild(task);
  document.getElementById('info').innerText = '';
}








// function getAll(){

//   axios
//   .post("http://127.0.0.1:5001/cocan-tic/us-central1/app/getAll")
//   .then((res) => {
//     if (res === undefined) {
//       console.log('Serverul nu a returnat nimic');
//     } else {
//       let elems=[];
//       res.forEach((elem) => {
//         addTaskToUI(elem);
//         elems.ad
//       });
//     }
//   });

//   addTaskToUI(elem){
//     console.log("dam in ui");
//   }

//   fetch(base_url, requestOptions)
//   .then((res) => {
//     if (res.status === 200) {
//       console.log('Mesaj');
//       return res.json();
//     } else {
//       console.log('A aparut o eroare');
//     }
//   })
//   .then((res) => {
//     if (res === undefined) {
//       console.log('Serverul nu a returnat nimic');
//     } else {
//       res.forEach((elem) => {
//         addTaskToUI(elem);
//       });
//     }
//   });

// }


export{
  login,
  getAll,
  //checkRedirect,
}
