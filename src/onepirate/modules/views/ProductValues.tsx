import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { useEffect, useState } from "react";
import Markdown from "../components/Markdown";
import { Link } from "react-router-dom";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  const [markdownPsicoterapia, setMarkdownPsicoterapia] = useState("");
  const [markdownOPC, setMarkdownOPC] = useState("");
  const [markdownGrupo, setMarkdownGrupo] = useState("");
  const [markdownConsultoria, setMarkdownConsultoria] = useState("");

  // https://github.com/webpack/webpack/issues/6680
  useEffect(() => {
    import("./texts/psicoterapia.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdownPsicoterapia(responseText));

    import("./texts/opc.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdownOPC(responseText));

    import("./texts/grupo.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdownGrupo(responseText));

    import("./texts/consultoria.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdownConsultoria(responseText));
  });

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden"/*, bgcolor: "secondary.light"*/ }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="/psicoterapia.png"
                alt="psicologia"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Psicoterapia
              </Typography>
              <Markdown>{markdownPsicoterapia}</Markdown>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="/opc.png"
                alt="opc"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Orientação Profissional e de Carreira
              </Typography>
              <Markdown>{markdownOPC}</Markdown>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="/grupo.png"
                alt="grupo"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Grupo Terapêutico
              </Typography>
              <Markdown>{markdownGrupo}</Markdown>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="/consultoria.png"
                alt="consultoria"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Consultoria e Palestras
              </Typography>
              <Markdown>{markdownConsultoria}</Markdown>
              <Link to="/blog/artigo">Consulte mais informações <span role="img" aria-label="raccoon">🦝</span></Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
