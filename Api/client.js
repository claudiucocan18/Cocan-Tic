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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore"; 


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



const baseURL = 'http://127.0.0.1:5001/cocan-tic/us-central1/app/';


async function login(loginEmail, loginPassword) {

 // let authenticated=false;
  let auth=getAuth();

  await axios
    .post("http://127.0.0.1:5001/cocan-tic/us-central1/app/login", {
      emailAddress: loginEmail,
      password: loginPassword,
      //authenticated: authenticated
    }).then(res => {
      if (res.data.token) {

        
        localStorage.setItem('token', JSON.stringify(res.data.token));
        console.log("Mister " + res.data);
        console.log("TOKEN after api: " + JSON.stringify(res.data.token).toString());//+JSON.stringify(res.data.token)
        //authenticated=true;

      }

      else //alert('Hello, World!');
        console.log("Eroareeee");
      // console.log(localStorage.getItem('token'));

    }).catch(error => {
      // Handle error
      console.error(error);

    });
    //return authenticated;
 
}




// function getAll(){

//   console.log("a intrat in getAll");
//         fetch("http://127.0.0.1:5001/cocan-tic/us-central1/app/getAll", requestOptions)
//         .then((res) => {
//           if (res.status === 200) {
//             console.log('Mesaj');
//             return res.json();
//           } else {
//             console.log('A aparut o eroare');
//           }
//         })
//           .then((res) => {
//                     if (res === undefined) {
//                       console.log('Serverul nu a returnat nimic');
//                     } else {
//                     //   console.log("typeof res");
//                     //  console.log(typeof res);

//                         return res;
//                     }
//                   });

function getAll2() {

  console.log("a intrat in getAll");
  fetch("http://127.0.0.1:5001/cocan-tic/us-central1/app/getAll", requestOptions)
    .then((res) => {
      if (res.status === 200) {
        console.log('Mesaj');
        console.log("res1");
        console.log(res);
        return res.json();
      } else {
        console.log('A aparut o eroare');
      }
    })
    .then((res) => {
      if (res === undefined) {
        console.log('Serverul nu a returnat nimic');
      } else {
        console.log("res2");

        console.log("co" + res.data);
        //const data = res.get().data;
        console.log("res1");
        console.log(res);
        return res;
      }
    });
}




function getAll() {

  axios.get("http://127.0.0.1:5001/cocan-tic/us-central1/app/getAll")
  .then(response => {


    console.log('Ala simplu rau ');
    console.log(response.data);
    let item=response.data;
  
   console.log( item[0].nota);
      // let x=element.nota;
      // let y= element.nume;
      //console.log(x);
    let v=[];
    
    item.forEach(element => {
      let nume=element.nume;

     let nota=element.nota;
      
      console.log(element.nota);
      console.log(element.nume);

      let ob={nota,nume};
      v.push(ob);
      createStud();

    });

    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
      
      console.log(v);

    return response.data;//response.data;
  }).catch(error => {
    console.log(error)
  });

}
//return res;

// let vectorNume = [];     
// let vectorNote = [];    

// let ob={};

// res.forEach((elem) => {
//   vectorNote.push(elem.nota);
//   vectorNume.push(elem.nume);

//   console.log(elem.nota);
// });

//   ob={vectorNote,vectorNume};

//   console.log("ob");

//   console.log(ob);


// //  console.log("Vectorul: "+ vector);
//   return ob;

// });


// .then(data => {

//   console.log(data);
//       return data;

//     });

// .then((res) => {
//   if (res === undefined) {
//     console.log('Serverul nu a returnat nimic');
//   } else {
//     var vector = [
//       {
//           nota:'',
//           nume:''
//       }
//   ];         
//     res.forEach((elem) => {
//       vector.push({
//         nota: elem.nota,
//         nume: elem.nume
//       });
//       console.log(vector[1]);
//     });
//     //  console.log("Vectorul: "+ vector);
//     //  return vector;
//   }
// });

//}



function createStud(){

  // datele.forEach(el =>
  //     axios.post('http://127.0.0.1:5001/cocan-tic/us-central1/app/stud/create',this.student)
  // // console.log(el)
  // )
  
  // addDoc(collection(db, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  console.log(items);
  
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


export {
  login,
  getAll,
  //checkRedirect,
}
