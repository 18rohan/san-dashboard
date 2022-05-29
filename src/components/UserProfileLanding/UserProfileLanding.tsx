import React from "react";
import Box from "@mui/material/Box";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const UserProfileLanding = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="8px"
      width="100%"
      minHeight="100%"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding="8px"
        width="100%"
        height="60px"
        boxShadow="1"
        borderRadius="8px"
      >
        <Typography fontWeight="700"> {"Username"} </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        padding="14px"
        marginTop="14px"
        width="100%"
        height="100%"
        boxShadow="2"
        borderRadius="8px"
      >
          {/* Add a grid to seperate the columns of data */}
        <Typography fontWeight="700"> {"UserDetails"} </Typography>
      </Box>
    </Box>
  );
};

export default UserProfileLanding;
