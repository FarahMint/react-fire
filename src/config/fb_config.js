import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
 import {config} from "./keys";
 

  firebase.initializeApp(config);
  
firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;