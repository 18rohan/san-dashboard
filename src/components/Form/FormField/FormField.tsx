import { InputAdornment, TextField } from "@mui/material";
import { Controller, useFormState } from "react-hook-form";
import {useFormContext} from 'react-hook-form';
type Fielddata = {
  FieldName: string;
  label: string;
  fullWidth:boolean;
  variant:'standard' | 'outlined' | 'filled' | undefined,
  size:'small' | 'medium' | undefined,
  startadornment?:string,
  endadornment?:string,
  fieldtype?:string
  error?:boolean,
  
};

const FormField = ({ FieldName, label, variant,fullWidth, error,size, ...restProps }: Fielddata) => {
const {formState:{errors}} = useFormContext();

  return (
    <Controller
      name={FieldName}
      defaultValue=""
      render={({ field:{onChange, onBlur, value ,ref}}) =>(
        
         <TextField 
         label={label} 
         variant={variant}
         size={size}
         fullWidth={fullWidth}
         onChange={onChange}
         error={!!error}
         type={restProps.fieldtype}
         InputProps={{
          startAdornment:restProps.startadornment && (<InputAdornment position="start">{restProps.startadornment}</InputAdornment>),
          endAdornment:restProps.endadornment && (<InputAdornment position="end">{restProps.endadornment}</InputAdornment>)
         }}
         onBlur={onBlur}

         
        //  helperText={error ? error.message : null}
         value={value}
         {...restProps}
          />
          
         )} 
         rules={{required:'Required Field!'}}
         
    />
    
  );
};

export default FormField;
