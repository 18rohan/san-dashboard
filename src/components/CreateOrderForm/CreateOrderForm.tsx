import React from "react";
import Box from "@mui/material/Box";

import CustomTextField from "../TextField/CustomTextField";
import Grid from '@mui/material/Grid'

const CreateOrderForm = () => {
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
        <CustomTextField label="Order type" value="12" id="component" fullWidth  />
        </Grid>
        <Grid item xs={12} md={6}>
        <CustomTextField label="Weight" value="12" id="component" fullWidth EndAdornment="Kg"/>
        </Grid>
        <Grid item xs={12} md={12}>
        <CustomTextField label="Date" value="12" id="component" fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
        <CustomTextField label="Components" value="12" id="component" fullWidth />
        </Grid>
      
      </Grid>
      
      
      
      {/* <CustomTextField label="Components" value="12" id="component" fullWidth />
      <CustomTextField label="Components" value="12" id="component" fullWidth />
      <CustomTextField label="Components" value="12" id="component" fullWidth /> */}
      </Box>
    </Box>
  );
};

export default CreateOrderForm;
