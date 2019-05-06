import React from 'react';
import moment from "moment";

const Notifications =({notifications})=> {
  return (
  <div className="notifications__card">
   
      <h3 >notifications</h3>
      <ul className="notifications">
      {notifications && notifications.map(item =>{
      return(
            <li key={item.id}>
           <span>  {item.user}</span>
           <span>  {item.content}</span>
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

export default Notifications;