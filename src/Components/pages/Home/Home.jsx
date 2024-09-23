import React, { useState, useEffect } from "react";
import { SliderContainer, Slide, Title, Image, FoydaliSaytTitle, FoydaliSaytlarCard, FoydaliSaytlar, FoydaliSaytlarCardimg, Cards, FoydaliSaytlarCardTitle } from "./styled";
import { Carousel } from "antd";
import useFetch from "../../hooks/useFetch"; // Use custom fetch hook

function Home() {
  const { data: sliderData, loading: sliderLoading, error: sliderError } = useFetch('/sliders'); // Sliders API
  const { data: siteData, loading: siteLoading, error: siteError } = useFetch('/useful-sites'); // Foydali saytlar uchun API

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  if (sliderLoading || siteLoading) return <p>Loading...</p>;
  if (sliderError) return <p>Error loading sliders: {sliderError}</p>;
  if (siteError) return <p>Error loading sites: {siteError}</p>;

  return (
    <>
      {/* Slider qismi */}
      <SliderContainer>
        <Carousel {...settings}>
          {sliderData.map((slider) => (
            <Slide key={slider.id}>
              <Image src={slider.image} alt={slider.title} />
              <Title>{slider.title}</Title>
            </Slide>
          ))}
        </Carousel>
      </SliderContainer>

      {/* Foydali saytlar qismi */}
      <FoydaliSaytlar>
        <FoydaliSaytTitle>FOYDALI SAYTLAR</FoydaliSaytTitle>
        <Cards>
          {siteData.map((item) => (
            <FoydaliSaytlarCard 
              key={item.id} 
              onClick={() => window.open(item.link, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <FoydaliSaytlarCardimg src={item.image} alt={item.title} />
              <FoydaliSaytlarCardTitle href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </FoydaliSaytlarCardTitle>
            </FoydaliSaytlarCard>
          ))}
        </Cards>
      </FoydaliSaytlar>
    </>
  );
}

export default Home;
