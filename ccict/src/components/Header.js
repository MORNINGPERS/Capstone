import React from 'react'
import '../Header.css';

import { HeaderData } from './HeaderData';

function Header() {
    return (
        <div className='header'>
            <div className="logo-container">
                <img src="logo192.png" alt="Logo" className="logo" />
            </div>
            <ul className='HeaderList'>
                {HeaderData.map((val,key)=>{
                return <list key={key}
                className = "row"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() =>{
                    window.location.pathname = val.link
                    }}>
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    </list>
                })}
                </ul>
            </div>
    );
}

export default Header