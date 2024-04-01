import * as React from "react";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import withRoot from "./modules/withRoot";
import Carousel from "./modules/views/Carousel"; 

function Index() {
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
    <div key="4">Slide 3</div>,
    // Adicione mais slides conforme necessário
  ];

  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <Carousel slides={slides} />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
