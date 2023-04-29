import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { Gavel, Instagram, LinkedIn } from "@mui/icons-material";


function Copyright() {
  return (
    <React.Fragment>
      {"© Talita Araujo "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

export default function AppFooter() {


  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="https://it.linkedin.com/in/talitadeoa" sx={iconStyle}>
                  <LinkedIn color="action" />
                </Box>
                <Box
                  component="a"
                  href="https://cadastro.cfp.org.br/"
                  sx={iconStyle}>
                  <Gavel color="action" />
                </Box>
                <Box component="a" href="https://instagram.com/talitadeoa" sx={iconStyle}>
                <Instagram color="action" />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6" marked="left" gutterBottom>
              Informações
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Natal, Brasil. 
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {"Tel. "} 
              <Link href="tel:+55 84 99802 6288">
              (84) 99802 6288
              </Link>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {"Email: "}
              <Link href="mailto:psitalitadeoa@gmail.com">
                talitadeoa@gmail.com
              </Link>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {"Inscrita no Conselho de Psicologia "}     
              <Link href="http://www.cadastro.cfp.org.br/visualizar.html?profissional=LMN3NJM4z6Ir0PV%2Bo%2BqbsmOvrxI8ZPa4aeGbvQgKAC0%3D"> 
              CRP 6704/17
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
