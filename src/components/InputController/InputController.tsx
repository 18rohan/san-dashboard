import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const InputController = ({ ...rest }) => {
  const { register } = useFormContext();
  return (
    <Controller
      {...rest}
      render={({ field }) => <TextField label={rest.label} {...field} />}
      defaultValue={rest.defaultValue}
      {...register(rest.name)}
    />
  );
};

export default InputController;
