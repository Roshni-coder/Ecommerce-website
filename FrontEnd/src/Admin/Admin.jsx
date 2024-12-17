
import { List,ListItem, Toolbar, useMediaQuery,ListItemIcon,ListItemButton, useTheme, CssBaseline ,Drawer,ListItemText} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const menu=[
  {name:"Dashboard",path:"/admin",icon:<DashboardIcon/>},
  {name:"Products",path:"/admin/products",icon:<DashboardIcon/>},
  {name:"Customers",path:"/admin/customers",icon:<DashboardIcon/>},
  {name:"Orders",path:"/admin/orders",icon:<DashboardIcon/>},
  {name:"AddProduct",path:"/admin/product/create",icon:<DashboardIcon/>},
]
function Admin() {
  const theme = useTheme();
  const isLargeScreen= useMediaQuery(theme.breakpoints.up('lg'));
  const [isdeBarVisible,setSideBarVisisble]= useState(false);
  const navigate = useNavigate();

  const drawer = (
  <Box
  sx={{
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}
>

  {isLargeScreen && <Toolbar/>}
  <List>
    {menu.map((item,index) =><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
      <ListItemButton>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText>{item.name}</ListItemText>
      </ListItemButton>
    </ListItem>)}
  </List>
  <List>
    <ListItem disablePadding >
      <ListItemButton>
        <ListItemIcon>
        <AccountCircleIcon/>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  </List>
  </Box>
  )

  return (
    <div>
      <Box sx={{ display: isLargeScreen ? 'flex' : 'block' }}>

        <CssBaseline/>
        <Drawer variant='permanent'>
            {drawer}
          </Drawer>
      </Box>
    </div>
  )
}

export default Admin