import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFF",
    },
  },
});

function TopBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <img
              src={require("../../../img/logo.svg").default}
              alt="Logo"
              style={{ height: "20px", marginRight: "8px" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontWeight: 700,
                letterSpacing: "0",
                color: "#C4084F",
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              BeaScholar
            </Typography>
            <Button
              href="/signin"
              variant="contained"
              sx={{
                fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                textTransform: "none", // Remove capitalization
                borderRadius: "20px", // Apply rounded edges
                width: "100px",
                padding: "5px",
                fontWeight: "bold",
                color: "#FFFFFF",
                backgroundColor: "#C70E4E",
                "&:hover": {
                  backgroundColor: "#C70E4E",
                },
              }}
            >
              Log Out
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default TopBar;
