import React from 'react'
import "./drawerToggleButton.css"


const DrawerToggleButton= props => {
  let transformButton= ["toggle-button__line"];

  if(props.show){
    transformButton=["toggle-button__line active"]
  }
   
  return (
    <div className="toolbar_toogle-button">
        <button className="toggle-button"
        onClick={ props.click }>
            <div className={transformButton}></div>
            <div className={transformButton}></div>
            <div className={transformButton}></div>
        </button>
      
    </div>
  )
}

export default  DrawerToggleButton;