import React from "react";
import Box from "@mui/material/Box";

import CustomTextField from "../TextField/CustomTextField";
import Grid from '@mui/material/Grid'
import {useForm} from 'react-hook-form';
import InputController from '../InputController/';


const CreateOrderForm = () => {
  const {register, handleSubmit, reset, control} = useForm();
  const handleRegistration:any = (data:any) =>console.log(data);
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
      <Box maxWidth={{md:'100%',xs:'100%'}}>
      <Grid container spacing={2}>
        <Grid item  xs={12} md={6}>
          <InputController name="orderWeight" label="Order Weight" variant="outlined"/>
        {/* <CustomTextField label="Order weight"  value="12" id="component"  fullWidth  /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <InputController name="materialType" label="Material Type" variant="outlined"/>
        {/* <CustomTextField label="Order type"  value="12" id="component"  fullWidth  /> */}
        </Grid>
        <Grid item xs={12} md={12}>
        <InputController name="color" label="Color" variant="outlined"/>
        {/* <CustomTextField label="Color" value="12"  id="component" fullWidth /> */}
        </Grid>
        <Grid item xs={12} md={12}>
        <InputController name="area" label="Area" variant="outlined"/>
        {/* <CustomTextField label="Area" value="12"  id="component"  fullWidth /> */}
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
