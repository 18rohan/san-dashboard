import React from 'react'
import Box from '@mui/material/Box';

import {useFormContext} from 'react-hook-form';


const FormSummary = () => {
  const formState = useFormContext();
  const values = formState.control._formValues
  // console.log("Summary: ",formState.control._formValues);
  return (
    <>
    <Box display="flex" flexDirection="column" marginBottom="12px" width="100%" justifyContent="center" alignItems="center">
      <Box width="60%">
        
          
          
        <Box display="flex" flexDirection="row" width="100%" ><h1>Order Summary</h1></Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom="4px"><span style={{fontWeight:'bold'}}>Weight: </span>{values.orderWeight}</Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom="4px"><span style={{fontWeight:'bold'}}>Material Type: </span>{values.materialType}</Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom="4px"><span style={{fontWeight:'bold'}}>Area: </span>{values.area}</Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom="4px"><span style={{fontWeight:'bold'}}>Color: </span>{values.color}</Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom="4px"><span style={{fontWeight:'bold'}}>Company Name: </span>{values.companyName}</Box>

        </Box>
    </Box>
    </>
  )
}

export default FormSummary