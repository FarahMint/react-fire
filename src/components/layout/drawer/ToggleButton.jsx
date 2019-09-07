import React from 'react';


const ToggleButton= props => {

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

export default  ToggleButton;