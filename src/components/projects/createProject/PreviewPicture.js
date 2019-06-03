import React from 'react';
import "./previewPicture.css"

const  PreviewPicture =(props)=> {
    const {pictureUrl}= props;
    
    return (
        <div className="preview">
            <img src={pictureUrl}
             alt="test" 
           className="img-thumbnail mb-2 mt-2"/>
        </div>
    )
}
export default  PreviewPicture;