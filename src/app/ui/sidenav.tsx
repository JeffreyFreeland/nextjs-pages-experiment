'use client'

import { useState } from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function SideNav() {
    const [ open, setOpen ] = useState(false);

    const toggleNavbar = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <Button variant="contained" onClick={toggleNavbar(true)}>
                <MenuIcon />
                Menu
            </Button>
            <Drawer open={open} onClose={toggleNavbar(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleNavbar(false)}>
                    <List>
                        <ListItem key="home" disablePadding>
                            <ListItemButton component={Link} href="/">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}