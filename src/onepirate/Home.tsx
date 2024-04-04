import * as React from "react";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import withRoot from "./modules/withRoot";
import Carousel from "./modules/views/Carousel"; 
import Carouselc from "./modules/views/Carouselc"; 
import Faq from "./modules/views/Faq"; 

function Index() {

  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <Carousel />
      <Carouselc />
      <Faq />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
