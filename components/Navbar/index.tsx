"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CompassCalibration } from "@mui/icons-material";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const styles = {
    BackdropProps: {
      background: "transparent",
    },
  };

  return (
    <>
      <AppBar
        sx={{
          background: "rgba(255, 255, 255, 0)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(16.4px)",
          "-webkit-backdrop-filter": "blur(16.4px)",
        }}
        position="sticky"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            SANJEEV
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
 PaperProps={{ 
    sx:{
    background:"rgba(30,30,35,1)"

    }
}
}
  open={open}
  onClose={handleDrawer}
>
  <List sx={{width:250}}>
    <ListItem>
      <ListItemButton >
        <ListItemText
          primaryTypographyProps={{ color: "white" }}
          primary="HI"
        />
        <ListItemIcon children={<CompassCalibration color="primary"/>}/>
      </ListItemButton>
    </ListItem>
  </List>
</Drawer>
    </>
  );
}
