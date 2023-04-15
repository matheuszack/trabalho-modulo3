import React from "react";
import HeroSlider, { Slide } from 'hero-slider'; //npm i hero-slider <-- Instalar a biblioteca

import imagem1 from './imagem/1.jpg';
import imagem2 from './imagem/2.jpg';
import imagem3 from './imagem/3.jpg';
import imagem4 from './imagem/4.jpg';

function Banner(){
  return(
    <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initaialSlide={1}
        onBeforeChange={(previousSlide, nextSlide)=> console.log("onBeforeChange", previousSlide, nextSlide)}
        onChange={nextSlide=> console.log("onChange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.33)",
          borderRadius: "10px"
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay:100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          height: "900px", //Altura e Largura
          width: "500px"
          
        }}
      >
      <Slide
        background={{
        backgroundImageSrc: imagem1,
        backgroundAttachment: "fixed"}}
        />
        <Slide
        background={{
        backgroundImageSrc:imagem2,
        backgroundAttachment: "fixed"}}
        />
        <Slide
        background={{
        backgroundImageSrc:imagem3,
        backgroundAttachment: "fixed"}}
        />
        <Slide
        background={{
        backgroundImageSrc: imagem4,
        backgroundAttachment: "fixed"}}
        />
    </HeroSlider>
    
  )
}

export default Banner