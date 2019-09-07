import React  from 'react';
 

const Overlay=({isActive, handleAuthForm}) => (
    <div className='tab__auth'> 
      { isActive && <> <span>Already have an account </span> <button 
          type="button"
          onClick={handleAuthForm}> login</button></>}

      { !isActive && <> <span>Don't have an account yet </span>
      <button 
          type="button"
          onClick={handleAuthForm}> register</button></>}
    </div>
  );

export default  Overlay;
