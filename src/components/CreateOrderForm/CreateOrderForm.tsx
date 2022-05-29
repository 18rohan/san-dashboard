import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

const CreateOrderForm = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center"  width="100%" paddingTop="20px" paddingBottom="20px">
        <TextField
          id="orderName"
          label="Order Name"
          value={'Container'}
        />
     <TextField
          id="orderName"
          label="Order Name"
          value={'Container'}
        />
         <TextField
          id="orderName"
          label="Order Name"
          value={'Container'}
        />
    </Box>
  )
}

export default CreateOrderForm