import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";



function SearchBox() {
    const [ value, setValue ] = useState('');
    const navigate = useNavigate();
    const submitHandler=(e:any)=>{
        e.stopPropagation();
        e.preventDefault();
        navigate(`/character/${value}`);
    }
    const changehandler=(e:any)=>{
        setValue(e.target.value);
    }
    return (
        <form className="search-box" onSubmit={ submitHandler }>
            <input type="text" onChange={ changehandler } value={value} placeholder="Search by id"/>
            <button type="reset"></button>
        </form>
        );
    }

export default SearchBox;
