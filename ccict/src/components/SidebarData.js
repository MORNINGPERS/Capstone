import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard",
    },
    {
        title: "Statistics",
        icon: <QueryStatsIcon />,
        link: "/statistics",
    },
    {
        title: "Users",
        icon: <PeopleAltIcon />,
        link: "/users",
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        link: "/profile",
    }
];