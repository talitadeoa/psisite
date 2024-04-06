import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { Link as RouterLink } from "react-router-dom";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Button
        component={RouterLink}
        to="/contato/"
        sx={{
          border: "4px solid currentColor",
          borderRadius: 10,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Alguma pergunta? Acha que posso te ajudar?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Entre em contato comigo e encontraremos a melhor solução para você.
      </Typography>
      <Box
        component="img"
        src="/producBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;
