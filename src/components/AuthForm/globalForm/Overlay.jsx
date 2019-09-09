import React  from 'react';
 

const Overlay=({isActive, handleAuthForm}) => (
    <div className='tab__auth'> 
      { isActive && 

      <> 
      <div>
      <span>Already have an account </span> <button 
          type="button"
          onClick={handleAuthForm}> login</button>
      </div>
          

          <div className="icon-svg"><svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><g fill="none"><path d="M0 0h24v24H0V0z"></path><path d="M0 0h24v24H0V0z" opacity=".87"></path></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg></div>
          </>}

      { !isActive && <>
      <div>
       <span>Don't have an account yet </span>
      <button 
          type="button"
          onClick={handleAuthForm}> register</button>
      </div>
          
          <div className="icon-svg"><svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></div>
          
          </>}
    </div>
  );

export default  Overlay;
