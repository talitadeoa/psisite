import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typography from "../components/Typography";

<Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
Depoimentos
</Typography>

const TextCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <div style={{ width: '500px', height: '700px' }}>
          <h3>Slide 1: "Desde que comecei a terapia com a Dra. Talita, minha vida mudou para melhor. Sua abordagem atenciosa e carinhosa me ajudou a enfrentar minhas crises de ansiedade e a desenvolver técnicas para lidar com elas. Estou muito grata por todo o apoio e orientação que tenho recebido.” C.P.L 31 anos</h3>
        </div>
      </div>
      <div>
        <div style={{ width: '500px', height: '700px' }}>
          <h3>Slide 2: “Depois de ter passado por alguns profissionais, ainda não tinha entendido como a terapia é um processo transformador.  Com a Talita consegui construir uma conexão e uma relação de confiança que foram de extrema importância para mim! Tem sido uma jornada de muito autoconhecimento e aprendizado, e, desde o início, me chama a atenção o quanto ela se importa e me faz sentir acolhido. Hoje, desejo que todos tenham uma Talita para que, assim como eu, se sintam encorajados a prosseguir!” D.M. 28 anos</h3>
        </div>
      </div>
      <div>
        <div style={{ width: '500px', height: '700px' }}>
          <h3>Slide 3: "Profissional extremamente comprometida e atenciosa. Suas orientações e apoio foram cruciais para que eu conseguisse mudar minha vida. Sou grato por todo o suporte e dedicação que ela demonstrou em cada sessão. Recomendo de olhos fechados a todos que buscam uma mudança positiva em suas vidas." C.H.C. 33 anos</h3>
        </div>
      </div>
      <div>
        <div style={{ width: '500px', height: '700px' }}>
          <h3>Slide 4: "Uma bondade de pessoa e uma excelente profissional. Sua competência e dedicação são evidentes em cada sessão. Ela se preocupa genuinamente com o desenvolvimento pessoal de seus pacientes, sabe ouvir e busca sempre oferecer o melhor suporte possível.” V.L. 39 anos</h3>
        </div>
      </div>
      <div>
        <div style={{ width: '500px', height: '700px' }}>
          <h3>Depoimento 5: "A terapia com a Dra. Talita foi fundamental para meu autoconhecimento e crescimento pessoal. Descobri a origem de meus comportamentos e aprendi a expressar meus sentimentos com clareza. Suas sessões me proporcionaram um espaço seguro para desabafar e encontrar novas perspectivas.” A.C.S 27 anos"</h3>
        </div>
      </div>
    </Slider>
  );
};

export default TextCarousel;
