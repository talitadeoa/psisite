import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TextCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480, // Tamanho da tela para dispositivos móveis
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tamanho da tela para tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // Tamanho da tela para desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const slideStyle = {
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    background: '#f0f0f0',
  };

  return (
    <div style={{ margin: '50px auto', maxWidth: '1024px' }}>
      <Slider {...settings}>
        <div>
          <div style={slideStyle}>
            <h3>Slide 1: "Desde que comecei a terapia com a Dra. Talita, minha vida mudou para melhor. Sua abordagem atenciosa e carinhosa me ajudou a enfrentar minhas crises de ansiedade e a desenvolver técnicas para lidar com elas. Estou muito grata por todo o apoio e orientação que tenho recebido.” C.P.L 31 anos</h3>
          </div>
        </div>
        <div>
          <div style={slideStyle}>
            <h3>Slide 2: “Depois de ter passado por alguns profissionais, ainda não tinha entendido como a terapia é 
