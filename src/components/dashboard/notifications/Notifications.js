import React from 'react';
import moment from "moment";

// import { MdClose} from "react-icons/md";

import "./notifications.css"

const Notifications =({notifications})=> {
 
  return (
      <div  className="notifications-control">
          {(notifications && notifications.length > 0 ) ? null : <span>No activit yet</span>}
      {notifications && notifications.map(item =>{
        return(
          <div className="messageBar" key={item.id}>
            <header className="message-header info">
              <p>{item.content}  {item.user}</p>
              
              {/* I will work on the remove notification */}
              {/*<MdClose className="close"/> */}
             
            </header>
              <article className="message-body">
              {moment(item.time.toDate()).fromNow()}
              </article>
          </div>     
        )
      })}
  </div>
  )
}
 

export default Notifications;

