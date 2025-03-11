import React from 'react';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';

export const HeaderData = [
    {
        icon: <input type="text" placeholder="Search..." className="search-bar" />,
        link: "#",
    },
    {
        title: "Tracker",
        icon: <QueryStatsIcon />,
        link: "/Tracker",
    },
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/Home",
    },
    {
        title: "Message",
        icon: <MailIcon />,
        link: "/Message",
    },
    {
        title: "Notification",
        icon: <NotificationsActiveIcon />,
        link: "/Notification",
    },
    {
        title: "Profile",
        icon: <PersonIcon />,
        link: "/ProfileUser",
    },
    
];