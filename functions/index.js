const functions = require('firebase-functions');
 const admin = require("firebase-admin");
//To interact with firebase SDK to access services
 admin.initializeApp(functions.config().firebase);

 

const createNotif =( notification =>{
    return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then( doc => console.log(`notification added`, doc))
})

exports.projectCreated = functions.firestore.document("projects/{projectId}")
.onCreate(doc =>{

    const project = doc.data();
    const notification ={
        content: "new project",
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotif(notification);
})

exports.userJoined = functions.auth.user()
.onCreate(user =>{
    
   return admin.firestore().collection("users").doc(user.uid)
   .get()
   .then( doc =>{
    const newUser = doc.data();
    const notification ={
        content: "Welcome",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotif(notification);
   })   
})
  

   