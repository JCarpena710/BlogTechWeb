import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const MainBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog Tech
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default MainBar;