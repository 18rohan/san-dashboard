import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormField from "../Form/FormField";
import { useFormContext } from "react-hook-form";
import SelectInput from "components/Form/SelectInput";
import * as RAL from "ral";
const CreateOrderForm = () => {
  const ColorsData = RAL.RAL;
  
  const {
    formState: { errors },
  } = useFormContext();
  // console.log("Error Current: ",errors);
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
      <Box maxWidth={{ md: "100%", xs: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormField
              FieldName="orderWeight"
              label="Order Weight"
              variant="outlined"
              size="medium"
              fullWidth
              fieldtype="number"
              endadornment="Kg"
              error={!!errors.orderWeight}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField
              FieldName="materialType"
              label="Material Type"
              variant="outlined"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <SelectInput
              data={ColorsData}
              FieldName="color"
              Labelid="color"
              id="color-field"
              fullWidth
              startadornment="RAL"
              label="color"
              size="medium"
              HelperText="Select a color"
            />
            {/* <FormField
              FieldName="color"
              label="Color"
              variant="outlined"
              size="medium"
              fullWidth
            /> */}
          </Grid>
          <Grid item xs={12} md={12}>
            <FormField
              FieldName="area"
              label="Area"
              variant="outlined"
              size="medium"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateOrderForm;
