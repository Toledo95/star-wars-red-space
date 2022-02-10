import React from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../SearchBox';
import './styles.css';
function Header() {
  return (
        <>
            <Link to="/">
                <div className="container">
                    <h1 className="title-star">Star</h1>
                    <h1 className="title-middle">The info guide</h1>
                    <h1 className="title-star">Wars</h1>
                </div>
            </Link>
            <SearchBox/>
        </>
    );
}

export default Header;
