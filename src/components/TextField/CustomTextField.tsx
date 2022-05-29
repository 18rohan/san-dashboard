import React, {FC} from 'react';
import TextField from '@mui/material/TextField';

interface Props {
    fullWidth?:boolean;
    label:string;
    onChange?:any;
    value:string | number | boolean;
    border?:boolean;
    variant:string;
    id:string;
    defaultValue?: string | number | boolean;
    error?: boolean;
    charLimit?:number;
    validation?:any;

}

const CustomTextField:FC<Props> = () => {
  return (
    <React.Fragment>
          <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
    </React.Fragment>
  )
}

export default CustomTextField
