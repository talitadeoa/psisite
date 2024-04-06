import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import theme from "../theme";
import Tooltip from "@mui/material/Tooltip";
import { InlineWidget } from "react-calendly";


const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  padding: theme.spacing(1, 5),
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

function ProductCTA() {

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "warning.main",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="div"
              sx={{ maxWidth: 400 }}
            >
              <Typography variant="h2" component="h2" gutterBottom>
                Como agendar
              </Typography>
              <Box
                component="div" sx={item}>
                <Box component="div" sx={number}>1.</Box>
                <Typography variant="h5">
                  Você pode acessar para ver os melhores horarios para agendamento
                </Typography>
              </Box>
              <Box component="div" sx={item}>
                <Box component="div" sx={number}>2.</Box>
                <Typography variant="h5">
                  Você pode acrescentar uma informação que ajudara no nosso encontro <b>Google Meet</b>.
                </Typography>
              </Box>
              <Box component="div" sx={item}>
                <Box component="div" sx={number}>3.</Box>
                <Typography variant="h5">
                   a <b>domicilio</b>.<Tooltip title="." enterTouchDelay={0}><Box component="a" sx={number}>*</Box></Tooltip>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background: "url(/productCTAImageDots.png)",
            }}
          />
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: 1,
              height: 1,
              maxWidth: 600,
            }}
          >
            <InlineWidget 
              url="https://calendly.com/talitadeoa/45min" styles={{height: '1000px'}}
                pageSettings={{
                hideEventTypeDetails: true,
                hideLandingPageDetails: true,
                hideGdprBanner: true,
    }}
/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductCTA;
