import React  from 'react';
import { Link } from 'react-router-dom';

import "./home.css"

export default function Home(props) {
    
    return (   
        <section className="homePage">
             <div className="banner-center">
            <h1>Project track</h1>
            <p>This app allows you to check in, create a memo to keep track of your projects. With features such as adding a picture as well as updating  your project info or removing it. You can also see what other members have been up to. This web app includes connection to a firebase database with authentication and notification functionnality.</p>

            <Link to="/auth">
            <button className="cta-more">learn more</button> 
            </Link>
        </div>
        </section>
       
       
    )
}
