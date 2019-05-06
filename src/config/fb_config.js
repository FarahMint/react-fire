import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyBKoqa5D5ASAWRaXYHiNc3D0iEXdbltgvM",
    authDomain: "flash-react.firebaseapp.com",
    databaseURL: "https://flash-react.firebaseio.com",
    projectId: "flash-react",
    storageBucket: "flash-react.appspot.com",
    messagingSenderId: "281517460446"
  };
  firebase.initializeApp(config);
  
firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;