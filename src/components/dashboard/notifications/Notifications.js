import React from 'react';
import moment from "moment";
 

import {connect} from "react-redux"
// use 2 HOC & chain together
import {compose} from "redux"
//HOC with Firestore collection
import {firestoreConnect} from "react-redux-firebase";

import "./notifications.css"

const Notifications =({notifications})=> {
 
  return (
  <div className="notifications__card">
   
     {(notifications && notifications.length > 0 ) ?(<h3>current activities</h3>) : <h3>No activit yet</h3>}
      
      <ul className="notifications">
 
      {notifications && notifications.map(item =>{
      return(
            <li key={item.id}>
           {/* <h5> {item.user}</h5> */}
           <h4> {item.content}</h4>
           <span>by {item.user}</span>
           <div>
           {moment(item.time.toDate()).fromNow()}
           </div>
            </li>
      )
      })}  
        
      </ul>
     
   
  </div>
  )
}

const mapStateToProps= (state)=>{
  //console.log(state);
  return{
    auth:state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
{collection:"notifications" , limit:3 ,orderBy: ["time", "desc"]} //-> collection we want to connect to
])
)(Notifications);

