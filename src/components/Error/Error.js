import React from 'react';
import { Link} from 'react-router-dom';

export default function Error() {
    return (
        <div className="homePage">
            <h1>404</h1>
            <Link to="/">
            <button>home page</button>
            </Link>
         
        </div>
    )
}
