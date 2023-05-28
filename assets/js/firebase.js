/* CONEXION A FIREBASE */
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
  /* import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js" */
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCpUH6E-djOpHVDw9KEOeGoSbiRMeyUVHk",
    authDomain: "formularioenvio-f4c6e.firebaseapp.com",
    projectId: "formularioenvio-f4c6e",
    storageBucket: "formularioenvio-f4c6e.appspot.com",
    messagingSenderId: "842729104360",
    appId: "1:842729104360:web:58b25239c7c78a32cbfa5d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()


  export const guardarDatos = (nombre, contacto, correo, cargo) => {

    addDoc(collection(db, 'datos'), {nombre, contacto, correo, cargo})

  }
