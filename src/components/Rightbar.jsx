import { Box } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box
      bgcolor="blue"
      flex={2}
      p={2}
      m={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}

export default Rightbar;
