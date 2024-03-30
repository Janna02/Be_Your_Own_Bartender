/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRZgO6FAEtRsRec57RzWN9PttC76V1AxI",
  authDomain: "janna02-c8a3b.firebaseapp.com",
  databaseURL: "https://janna02-c8a3b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "janna02-c8a3b",
  storageBucket: "janna02-c8a3b.appspot.com",
  messagingSenderId: "115086001572",
  appId: "1:115086001572:web:48f92dd39ac3470f94ed31",
  measurementId: "G-TNLXQ406BG"
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