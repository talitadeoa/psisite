import * as React from "react";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import withRoot from "./modules/withRoot";
import Carousel from "./modules/views/Carousel"; 
import Faq from "./modules/views/Faq"; 
import ReactPixel from 'react-facebook-pixel';

function Index() {
  React.useEffect(() => {
    // Rastreie a visualização da página assim que o componente for montado
    ReactPixel.pageView();
  }, []); // Certifique-se de passar um array vazio como segundo argumento para garantir que isso só seja executado uma vez


  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <Carousel />
      <Faq />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
