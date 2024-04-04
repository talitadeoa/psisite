import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const depoimentos = [
  {
    id: 1,
    conteudo: 'Desde que comecei a terapia com a Dra. Talita, minha vida mudou para melhor. Sua abordagem atenciosa e carinhosa me ajudou a enfrentar minhas crises de ansiedade e a desenvolver técnicas para lidar com elas. Estou muito grata por todo o apoio e orientação que tenho recebido.',
    autor: 'C.P.L',
    idade: '31 anos',
  },
  {
    id: 5,
    conteudo: 'A terapia com a Dra. Talita foi fundamental para meu autoconhecimento e crescimento pessoal. Descobri a origem de meus comportamentos e aprendi a expressar meus sentimentos com clareza. Suas sessões me proporcionaram um espaço seguro para desabafar e encontrar novas perspectivas.',
    autor: 'A.C.S',
    idade: '27 anos',
  },
  {
    id: 3,
    conteudo: 'Profissional extremamente comprometida e atenciosa. Suas orientações e apoio foram cruciais para que eu conseguisse mudar minha vida. Sou grato por todo o suporte e dedicação que ela demonstrou em cada sessão. Recomendo de olhos fechados a todos que buscam uma mudança positiva em suas vidas.',
    autor: 'V.H.C',
    idade: '33 anos',
  },
  {
    id: 4,
    conteudo: 'Uma bondade de pessoa e uma excelente profissional. Sua competência e dedicação são evidentes em cada sessão. Ela se preocupa genuinamente com o desenvolvimento pessoal de seus pacientes, sabe ouvir e busca sempre oferecer o melhor suporte possível.',
    autor: 'V.L',
    idade: '39 anos',
  },
  {
    id: 2,
    conteudo: 'Depois de ter passado por alguns profissionais, ainda não tinha entendido como a terapia é um processo transformador. Com a Talita consegui construir uma conexão e uma relação de confiança que foram de extrema importância para mim! Tem sido uma jornada de muito autoconhecimento e aprendizado, e, desde o início, me chama a atenção o quanto ela se importa e me faz sentir acolhido. Hoje, desejo que todos tenham uma Talita para que, assim como eu, se sintam encorajados a prosseguir!',
    autor: 'D.M.',
    idade: '28 anos',
  },
];

 // Componentes de setas personalizadas
 const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      Previous
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      Next
    </button>
  );
};

const DepoimentosSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    style: { margin: '30px' },
    responsive: [
      {
        breakpoint: 480, // Tamanho da tela para dispositivos móveis
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          style: { margin: '20px' },
        },
      },
      {
        breakpoint: 768, // Tamanho da tela para tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: true
        },
      },
      {
        breakpoint: 1024, // Tamanho da tela para desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          style: { margin: '80px' },
        },
      }, // Adicionei a marcação de fechamento aqui
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


  const slideStyle = {
    width: '100%',
    margin: '10 auto',
    padding: '50px',
    borderRadius: '30px',
    background: '#f0f0f0',
    marginRight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
  
  
  return (
    <Slider {...settings}>
      {depoimentos.map((depoimento) => (
        <div key={depoimento.id}>
          <Grid container spacing={0}>
            <div style={slideStyle}>
              <Grid item xs={12}>
                  <Typography variant="h5">
                    {depoimento.conteudo}
                  </Typography>
                  <Typography variant="h5">
                    <strong>{depoimento.autor}</strong>
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {depoimento.idade}
                  </Typography>
              </Grid>
            </div>
          </Grid>
        </div>
      ))}
    </Slider>
  );
};

export default DepoimentosSlider;