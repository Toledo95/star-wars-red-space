import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';


function Footer() {
    const year=new Date().getFullYear();
  return (
    <>
        
            <div className="container-footer">
                <div className="footer-item">
                    <Link to="/info">More info about the project</Link> 
                </div> 
                <div className="footer-item">
                    <a href="https://toledocarlos.com">Carlos Toledo</a> and <a href="https://www.redspace.com/">Red space</a> colaboration  © {year}
                </div>
            </div>
        
        
    </>
    );
}

export default Footer;
