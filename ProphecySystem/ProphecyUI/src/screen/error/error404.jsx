import React from 'react'
import { isRouteErrorResponse } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Error404() {
    return(
      <div className="error">
    <p>Hello, you can go Back</p>
    <Link to="/">Home</Link>
   </div>  
    )
   
}

export default Error404;