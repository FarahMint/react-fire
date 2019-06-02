import React from 'react'

const  PreviewPicture =(props)=> {
    const {pictureUrl}= props;
    
    return (
 <img src={pictureUrl}
  alt="test" 
className="img-fluid mb-2 mt-2"/>
    )
}
export default  PreviewPicture;