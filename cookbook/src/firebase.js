/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDWrtJvQe282FmTI-b0Pl2Dbh4EcNgT2EU",
  authDomain: "be-your-own-bartender-a0786.firebaseapp.com",
  projectId: "be-your-own-bartender-a0786",
  storageBucket: "be-your-own-bartender-a0786.appspot.com",
  messagingSenderId: "526717767110",
  appId: "1:526717767110:web:0bccd0fc79021bbf50b6c7",
  measurementId: "G-H558V1340Z"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

export default {
  install: (app) => {
    app.config.globalProperties.$auth = auth;
    app.config.globalProperties.$db = db;
  },
};