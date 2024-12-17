import {
  AppBar,
  Toolbar,
  Box,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import Search from "./Search";
import CosttomBtn from "./CosttomBtn.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 5%;
  font-weight:600;
  font-style:italic;
  text-decoration:none;
  color:#fff;
  font-size:25px;
  font-family: "Gill Sans", sans-serif;
`;

const CusttomBtnWrapper = styled(Box)(({ theme }) => ({
  margin: "0 1% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
   
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          <Box style={{width:200}} onClose={handleClose}>
            <List>
              <ListItem>
                <CosttomBtn />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Component to="/">
         GrabCarts
        </Component>
        <Search />
        <CusttomBtnWrapper>
          <CosttomBtn />
        </CusttomBtnWrapper>

      </Toolbar>
    </StyledHeader>
  );
}
