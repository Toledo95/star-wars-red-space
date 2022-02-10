import React from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../SearchBox';
import Footer from '../Footer';
import sadBeep from "../../assets/images/r2-sad.gif";
import './styles.css';


function NotFound() {
  return (
    <>
        <Link to="/">
            <div className="container">
                <h1 className="title-star">Not</h1>
                <h1 className="title-middle">404</h1>
                <h1 className="title-star">Found</h1>
            </div>
        </Link>
        <SearchBox/>
        <div className="container-sadbeep">
            <img src={sadBeep} alt="sadBeep" />
        </div>
        <Footer/>
        
        
    </>
    );
}

export default NotFound;
