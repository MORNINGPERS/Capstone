import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import './AdminHeader.css';

function AdminHeader() {
    return (
        <div className="admin-header">
            {/* Left Section - Greeting */}
            <div className="admin-greeting">
                <h2>Hi, Tynisha!</h2>
                <p>Let's check your store today</p>
            </div>

            {/* Middle Section - Search Bar */}
            <div className="admin-search">
                <SearchIcon className="search-icon" />
                <input type="text" placeholder="Search..." className="search-input" />
            </div>

            {/* Right Section - Icons and Profile */}
            <div className="admin-icons">
                <MailIcon className="icon mail" />
                <NotificationsActiveIcon className="icon notification" />
                <div className="admin-profile">
                    <Avatar src="profile-image.jpg" alt="Tynisha Obey" />
                    <div className="profile-info">
                        <p className="profile-name">Tynisha Obey</p>
                        <p className="profile-role">KATRING</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;
