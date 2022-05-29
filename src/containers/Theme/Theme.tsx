import React, { FC, useMemo, createContext, useState } from "react";

// import { ThemeProvider } from "@mui/system";
// import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
interface Props {
  children: JSX.Element;
}

const Theme: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
    // const Theme = useMemo(()=>{
    //     createTheme({
    //         compo
    //     })
    // })
    console.log(mode)
  return (
      <ColorModeContext.Provider value={colorMode}>
          
              <CssBaseline />
              {children}
          
      </ColorModeContext.Provider>
  );
};

export default Theme;