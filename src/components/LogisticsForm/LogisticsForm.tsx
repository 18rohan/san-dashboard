import React from "react";
import Box from "@mui/material/Box";

import CustomTextField from "../TextField/CustomTextField";
import Grid from '@mui/material/Grid'
import FormField from '../FormField';

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
        {/* <InputController name="companyName" label="Company Name" variant="outlined"/> */}
        {/* <CustomTextField label="Company Nane" value="12" id="component" fullWidth  /> */}
         <FormField
              FieldName="companyName"
              label="Company Name"
              variant="outlined"
              size="medium"
              
              fullWidth

            />
        </Grid>
        <Grid item xs={12} md={6}>
        {/* <InputController name="address" label="Company Address" variant="outlined"/> */}
        <FormField
              FieldName="address"
              label="Address"
              variant="outlined"
              size="medium"
              
              fullWidth
            />
        {/* <CustomTextField label="Address" value="12" id="component" fullWidth  /> */}
        </Grid>
        <Grid item xs={12} md={12}>
          {/* <InputController name="city" label="City" variant="outlined"/> */}
          <FormField
              FieldName="city"
              label="City"
              variant="outlined"
              size="medium"
              
              fullWidth
            />
        {/* <CustomTextField label="City" value="12" id="component" fullWidth /> */}
        </Grid>
        <Grid item xs={12} md={12}>
        {/* <InputController name="state" label="State" variant="outlined"/> */}
        <FormField
              FieldName="area"
              label="Area"
              variant="outlined"
              size="medium"
              
              fullWidth
            />
        {/* <CustomTextField label="Area" value="12" id="component" fullWidth /> */}
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
