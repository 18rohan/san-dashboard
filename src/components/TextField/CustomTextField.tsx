import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";


interface Props {
  fullWidth?: boolean;
  label: string;
  onChange?: any;
  value: string | number | boolean;
  border?: boolean;
  variant?: string;
  id: string;
  defaultValue?: string | number | boolean;
  error?: boolean;
  charLimit?: number;
  validation?: any;
  EndAdornment?: string;
  StartAdornment?: string;
}

const CustomTextField: FC<Props> = ({
  label,
  value,
  border,
  variant,
  id,
  defaultValue,
  error,
  charLimit,
  validation,
  EndAdornment,
  StartAdornment,
}: Props) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <TextField
        fullWidth
        id={id}
        color="warning"
        InputProps={{
          startAdornment: StartAdornment && (
            <InputAdornment position="start">{StartAdornment}</InputAdornment>
          ),
          endAdornment: EndAdornment && (
            <InputAdornment position="end" >{EndAdornment}</InputAdornment>
          ),
        }}
        label={label}
        defaultValue={defaultValue}
        // helperText="Incorrect entry."
      />
    </Box>
  );
};

export default CustomTextField;
