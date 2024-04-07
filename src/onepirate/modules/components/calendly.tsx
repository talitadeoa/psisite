import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import theme from "../theme";
import Tooltip from "@mui/material/Tooltip";
import { InlineWidget } from "react-calendly";


function Calendly() {
  return (
    <InlineWidget
      url="https://calendly.com/talitadeoa/45min"
      styles={{ width: "100%", height: "100%" }}
      pageSettings={{
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        hideGdprBanner: true,
      }}
    />
  );
}

export default Calendly;
