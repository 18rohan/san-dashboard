import React, { FC } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Grid';
type ContainerProps = {
    value:any;
}
const SummaryField:FC<ContainerProps>= (props:ContainerProps) => {
  return (
    
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      marginBottom="4px"
    >
      {props.value}
    </Box>
  );
};

export default SummaryField;
