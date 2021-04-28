import React from 'react';
import './Footer.css';

const Nav = {
    backgroundColor: "black",
    textAlign: "center",
    alignItems : "center",
    color: "#FFF",
    fontFamily: "Times New Roman",
    wordSpacing: "4px",
    justifyContent : "center",
    transition: "all 0.5s ease 0s",
};

const Footer = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-bottom" style={Nav} id='nav'>
            <p>Copyright © 2021 COVID-19 Live Updates. All Rights Reserved. #StayHomeStaySafe</p>

        </nav>
    );
}

export default Footer
