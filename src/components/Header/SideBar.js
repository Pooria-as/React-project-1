import { Drawer, List, ListItemText } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import React from 'react'

const SideBar = ({ open, OnClose }) => {
    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={() => OnClose()}
        >

            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    onClick={() => console.log('hello')}
                >
                    <h5>
                        Event Start in
                    </h5>

                </ListItemButton>

                <ListItemButton
                >
                    <h5>
                        Venue NFO
                    </h5>

                </ListItemButton>

                <ListItemButton
                >
                    <h5>
                        Highlights
                    </h5>

                </ListItemButton>

                <ListItemButton
                >
                    <h5>
                        Pricing
                    </h5>

                </ListItemButton>

                <ListItemButton
                >
                    <h5>
                        Location
                    </h5>
                </ListItemButton>
            </List>
        </Drawer>
    )
}

export default SideBar