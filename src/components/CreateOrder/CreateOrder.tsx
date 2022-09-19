import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";

// Import Icons and UI Components
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import Button from "@mui/material/Button";



// Components
import CreateOrderForm from "../CreateOrderForm";
import LogisticsForm from "../LogisticsForm";
interface formData{
  OrderWeight:number,
  MaterialType:string,
  ProductColor:string,
  area:string,
  CompanyName:string,
  address:string,
  city:string,
  state:string,
  pincode:string,  
}
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "Create an order",
  "Finalise the logistics",
  "Finalise the order",
];

export default function CustomizedSteppers() {
  const defaultValues = {
    OrderWeight:'',
    MaterialType:'',
    ProductColor:'',
    area:'',
    CompanyName:'',
    address:'',
    city:'',
    state:'',
    pincode:'',
  }
  const validationSchema = [
      yup.object({
        OrderWeight:yup.number().required("Required"),
        materialType:yup.string().required("Required"),
        productColor:yup.string().required("Required"),
        area:yup.string().required("Required"),
      }),
      yup.object({
          companyName:yup.string().required("Required"),
          address:yup.string().required("Required"),
          city:yup.string().required("Required"),
          state:yup.string().required("Required"),
          pincode:yup.string().required("Required"),
      })
    ]
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const currentValidationSchema = validationSchema[currentStep];
   const methods = useForm({
    shouldUnregister:false,
    defaultValues,
    resolver:yupResolver(currentValidationSchema),
    mode:"onChange"

  })

  const {handleSubmit, trigger} = methods;
  
  async function NextStep(currentStep: number) {
    const isStepValid = await trigger();
    if ((currentStep < 2) ) {
      setCurrentStep((prevState) => prevState + 1);
    } else return;
  }
  async function PrevStep(currentStep: number) {
    if (currentStep > 0) {
      setCurrentStep((prevState) => prevState - 1);
    } else return;
  }
  const renderStepContent = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <CreateOrderForm />;
      case 1:
        return <LogisticsForm />;
      case 2:
        return <CreateOrderForm />;
    }
  };
  console.log("CurrentStep: ", currentStep);

 
  const onSubmit = (data:any)=>{
    alert(JSON.stringify(data));
    NextStep(currentStep);
    
  }
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={currentStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      {/* Switching between different steps of the form */}
              {renderStepContent(currentStep)}
      

      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        {currentStep > 0 && (
          <Button
            sx={{ width: "100px", marginX: "12px" }}
            variant="contained"
            color="error"
            onClick={() => {
              PrevStep(currentStep);
            }}
          >
            Prev
          </Button>
        )}
        {currentStep === steps.length -1 ?  (<Button
          sx={{ width: "100px" }}
          variant="contained"
          color="info"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>) : (<Button
          sx={{ width: "100px" }}
          variant="contained"
          color="info"
          onClick={() => {
            NextStep(currentStep);
          }}
        >
          Next
        </Button>)}
      </Box>
    </>
  );
}
