import React, { Suspense } from "react";
import Paper from "@mui/material/Paper";
import "./App.css";
// import Box from '@mui/material/Box'

// Containers
// import Theme from "./containers/Theme";
import Routes from "./containers/Routes";
// Components
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  return (
    <Paper elevation={0}>
      <Suspense fallback={<LoadingScreen />}>
        <Routes />
      </Suspense>
    </Paper>
  );
}

export default App;
