import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
 import {config} from "./keys";
 

  firebase.initializeApp(config);
  
firebase.firestore().settings({timestampsInSnapshots:true});
const storage= firebase.storage();
  // export default firebase;
  export{storage, firebase as default}  