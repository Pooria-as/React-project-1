import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
const Header = ({ AppBarBgColor }) => {

    const [SideBarStatus, setSideBarStatus] = useState(false)
    const OnCloseSideBar = () => {
        setSideBarStatus(false);
    }
    const OpenSideBar = () => {
        setSideBarStatus(true);
    }

    return (
        <AppBar
            position='fixed'
            style={{ "background": `${AppBarBgColor}`, "boxShadow": 'none', "padding": '1rem 0rem' }}>
            <Toolbar>
                <div className='header_logo'>
                    <div className='font_rightneous header_logo_venue'>
                        The Venue
                    </div>
                    <div className='header_logo_title'>
                        Musical Event
                    </div>
                </div>

                <IconButton
                    color="inherit"

                    onClick={OpenSideBar}
                >
                    <MenuIcon />
                </IconButton>


                <SideBar
                    open={SideBarStatus}
                    OnClose={OnCloseSideBar}
                />

            </Toolbar>

        </AppBar>
    )
}

export default Header