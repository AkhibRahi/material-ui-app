import styled from "@emotion/styled";
import { AppBar, Badge, Box, InputBase, Toolbar, Typography } from "@mui/material";
import React from "react";
import Pets from "@mui/icons-material/Pets";
import MailIcon from '@mui/icons-material/Mail'
import Notifications from '@mui/icons-material/Notifications'

function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Lama Dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
