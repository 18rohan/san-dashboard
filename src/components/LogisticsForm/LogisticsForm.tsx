import React from "react";
import Box from "@mui/material/Box";

import CustomTextField from "../TextField/CustomTextField";
import Grid from '@mui/material/Grid'

const LogisticsForm = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      paddingTop="50px"
      paddingBottom="20px"
    >
      <Box maxWidth={{md:'80%',xs:'100%'}}>
      <Grid container spacing={2}>
        <Grid item  xs={12} md={6}>
        <CustomTextField label="Company Nane" value="12" id="component" fullWidth  />
        </Grid>
        <Grid item xs={12} md={6}>
        <CustomTextField label="Address" value="12" id="component" fullWidth  />
        </Grid>
        <Grid item xs={12} md={12}>
        <CustomTextField label="City" value="12" id="component" fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
        <CustomTextField label="Area" value="12" id="component" fullWidth />
        </Grid>
      
      </Grid>
      
      
      
      {/* <CustomTextField label="Components" value="12" id="component" fullWidth />
      <CustomTextField label="Components" value="12" id="component" fullWidth />
      <CustomTextField label="Components" value="12" id="component" fullWidth /> */}
      </Box>
    </Box>
  );
};

export default LogisticsForm;
