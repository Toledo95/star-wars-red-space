import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';


function Footer() {
    const year=new Date().getFullYear();
  return (
    <>
        
            <div className="container">
                <span className="footer">
                    <Link to="/info">More info about the project</Link> 
                </span> <br />
                <span className="footer">
                    <a href="https://toledocarlos.com">Carlos Toledo</a> and <a href="https://www.redspace.com/">Red space</a> colaboration  © {year}
                </span>
            </div>
        
        
    </>
    );
}

export default Footer;
