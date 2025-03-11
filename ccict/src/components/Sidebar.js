import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="logo-container">
                <img src="logo192.png" alt="Logo" className="logo" />
            </div>
            <ul className='SidebarList'>
                {SidebarData.map((val,key)=>{
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

export default Sidebar