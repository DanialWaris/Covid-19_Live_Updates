import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {


    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <a class="navbar-brand" href="#">Covid - 19 Live Updates</a>
            <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/countries">Countries</Link>
                    </li>
                    
                </ul>
                
  </div>
</nav>
    )
}

export default Navbar