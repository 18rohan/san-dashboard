import { TextField } from "@mui/material";
import { Controller, useFormContext, useFormState } from "react-hook-form";

type Formdata = {
  FieldName: string;
  label: string;
  fullWidth:boolean;
  variant:'standard' | 'outlined' | 'filled' | undefined,
  size:'small' | 'medium' | undefined,
  
  
  
};
const defaultValue= {
  orderWeight:'',
  materialType:'',
  color:'',
  area:'',

}
const FormField = ({ FieldName, label, variant,fullWidth, size, ...restProps }: Formdata) => {
  
  const formState = useFormState();
  return (
    <Controller
      name={FieldName}
      defaultValue=""
      render={({ field:{onChange, onBlur, value ,ref} }) =>(
         <TextField 
         label={label} 
         variant={variant}
         size={size}
         fullWidth={fullWidth}
         onChange={onChange}
         
         onBlur={onBlur}
         ref={ref}
         error={Boolean(formState.errors.lastName)}
         helperText={formState.errors.lastName?.message}
         value={value}
         {...restProps}
          />
         )} 
         rules={{required:'Required!'}}
    />
  );
};

export default FormField;
