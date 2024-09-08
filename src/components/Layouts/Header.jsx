import React, { Suspense, lazy, useState } from 'react';
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { orange } from '../../constants/color';
import { Add as AddIcon, Logout as LogoutIcon, Group as GroupIcon, Menu as MenuIcon, Search as SearchIcon, Notifications } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const Search = lazy(() => import("../Specific/Search"));
const Notification = lazy(() => import("../Specific/Notification"));
const NewGroup = lazy(() => import("../Specific/NewGroup"));

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);

    const navigate = useNavigate();

    const handleMobile = () => {
        setMobile(prev => !prev);
    };

    const openSearchDialog = () => {
        setIsSearch(prev => !prev);
    };

    const openNewGroup = () => {
        setIsNewGroup(prev => !prev);
    };

    const navigateToGroup = () => {
        navigate("/groups");
    };

    const logoutHandler = () => {
        console.log("logoutHandler");
    };

    const openNotification = () => {
        setIsNotification(prev => !prev);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position="static" sx={{ bgcolor: orange }}>
                    <Toolbar>
                        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                            chattu
                        </Typography>

                        <Box variant='h6' sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconButton color="inherit" onClick={handleMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box>
                            <IconBtn title={"search"} icon={<SearchIcon />} onClick={openSearchDialog} />

                            <IconBtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />

                            <IconBtn title={"manage group"} icon={<GroupIcon />} onClick={navigateToGroup} />

                            <IconBtn title={"Notifications"} icon={<Notifications />} onClick={openNotification} />

                            <IconBtn title={"logout"} icon={<LogoutIcon />} onClick={logoutHandler} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Backdrop for Search */}
            {isSearch && (
                <Backdrop open={true}>
                    <Suspense fallback={<Backdrop open={true} />}>
                        <Search />
                    </Suspense>
                </Backdrop>
            )}

            {/* Backdrop for Notification */}
            {isNotification && (
                <Backdrop open={true}>
                    <Suspense fallback={<Backdrop open={true} />}>
                        <Notification />
                    </Suspense>
                </Backdrop>
            )}

            {/* Backdrop for NewGroup */}
            {isNewGroup && (
                <Backdrop open={true}>
                    <Suspense fallback={<Backdrop open={true} />}>
                        <NewGroup />
                    </Suspense>
                </Backdrop>
            )}
        </>
    );
};

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
};

export default Header;