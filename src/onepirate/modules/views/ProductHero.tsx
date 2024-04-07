import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Link as RouterLink } from "react-router-dom";

const backgroundImage = "./header.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      bgImage={backgroundImage}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" component="h1" variant="h2" marked="center">
        Psicóloga Talita Araújo
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        component="h2"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
       A <b>Psicologia</b> transforma pessoas e as pessoas transformam o mundo.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={RouterLink}
        to="/contato/"
        sx={{ minWidth: 200 }}
      >
        Contato
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        -
      </Typography>
    </ProductHeroLayout>
  );
}
