import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import "./ResponsiveDrawer.css"
import "../Leftbar/Leftbar.css"

import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Rightbar from '../Rightbar/Rightbar';
import Leftbar from '../Leftbar/Leftbar';

const drawerWidth = "28%";

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    
      {/* Left bar Component */}
      <Leftbar/>
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', width:"100%" }}>
    
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth})` },
          ml: { md: `${drawerWidth}` },
          backgroundColor: 'black',
         
        }}
      >
        <Toolbar  sx={{ mr: 2, display: { md: 'none' },  borderBottom:'1px solid orange', }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            
          >
            <MenuIcon />
          </IconButton>
        
          <div>
            <h1 className="vaultpassheading" style={{"marginBottom":0}}>VAULT PASS</h1>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          className="scrollbar"
         
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
         
          sx={{
            display: {md: 'none' },
            
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: `calc(38% + ${drawerWidth})` } }
           
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          className="scrollbar"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth})` } }}
      >
        <Toolbar sx={{ display: { md: 'none' } }} >
           
             
         </Toolbar>
         <Rightbar/>
       
       
       
      </Box>
    </Box>
  );
}



export default ResponsiveDrawer;
