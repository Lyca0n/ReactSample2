import * as firebase from 'firebase';

const config  = {
    apiKey: "AIzaSyChptrE4q4p9Ml-jum434gPnipeRI_XW2g",
    authDomain: "expensify-6fcdb.firebaseapp.com",
    databaseURL: "https://expensify-6fcdb.firebaseio.com",
    projectId: "expensify-6fcdb",
    storageBucket: "expensify-6fcdb.appspot.com",
    messagingSenderId: "756539405742"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

export default database;