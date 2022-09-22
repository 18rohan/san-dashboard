import React from "react";
import Box from "@mui/material/Box";

import CustomTextField from "../TextField/CustomTextField";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
// import InputController from '../InputController/';
import FormField from "../FormField";
import { TextField } from "@mui/material";

const FormSubmitted = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const handleRegistration: any = (data: any) => console.log(data);
  const defaultValues = {
     orderWeight:'asd',
    materialType:'',
    ProductColor:'',
    area:'',
  }
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
      <h1>Form Submitted Successfully</h1>
    </Box>
  );
};

export default FormSubmitted;
