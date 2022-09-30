import { FormControl, InputAdornment, MenuItem, InputLabel, Select, SelectProps,  FormControlLabelProps, FormHelperText, SelectChangeEvent} from "@mui/material";

import React from "react";
import { Controller, useFormState } from "react-hook-form";


type FieldData = {
  FieldName: string;
  label?: string;
  Labelid: string;
  id: string;
  error?: boolean;
  fullWidth: boolean;
  variantVal?: "standard" | "outlined" | "filled" | "undefined";
  size: "small" | "medium" | "undefined";
  data: any;
  startadornment?:string;
  HelperText?:string;
};


const SelectInput = ({
  FieldName,
  id,
  label,
  variantVal,
  fullWidth,
  error,
  data,
  size,
  ...restProps
}: FieldData) => {
  const [value, setValue] = React.useState<string>("");
  
  return (
    <Controller
      name={FieldName}
      defaultValue=''
      render={({ field: { onChange, onBlur, value } }) => (
        <FormControl fullWidth>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            labelId={id}
            id={id}
            value={value}
            variant="outlined"
            
            label={label}
            onChange={onChange}
            startAdornment={
                restProps.startadornment && (<InputAdornment position="start">{restProps.startadornment}</InputAdornment>)
            }
            
          >
            <MenuItem value=""  selected><em>Select</em></MenuItem>
            {data.map((item:any,index:number) => (
              <MenuItem key={index.toString()} value={item.code} style={{fontWeight:'bold'}}>{item.code}</MenuItem>
            ))}
          </Select>
          <FormHelperText>{restProps.HelperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default SelectInput;
