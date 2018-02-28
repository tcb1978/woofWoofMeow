import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () =>
<div className="NotFound">
  <h3>Error 404</h3>
  
  <p>
    We are sorry but the page you are looking for does not exist. <br />
    Please, come back to Home page.<br />
    <Link to="/">Home</Link>
  </p>
  <img src="https://http.cat/404" alt="404 page not found" height="500" />
  
</div>

export default NotFound;