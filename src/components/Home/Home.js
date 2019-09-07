import React  from 'react';
import { Link } from 'react-router-dom';

import image01 from '../../images/print-screen.png'


export default function Home() {
    
    return (   
        <section className="homePage">
            <div className="banner-center">
             <div className="banner-center-text">
            <h1>Project track</h1>
            <p>You can log in, create memos, keep track of your projects and see what other members are up to.</p>

            <Link to="/auth">
            <button className="cta-more">learn more</button> 
            </Link>
        </div>

        <div className="banner-center-img">
            <img src={image01} 
            alt="print-screen"/>
 
        </div>

            </div>

   
        </section>
       
       
    )
}
