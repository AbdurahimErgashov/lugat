import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  background-color: #f8f9fa;
`;

export const Slide = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
`;

export const Title = styled.h2`
  /* position: absolute; */
  bottom: 20px;
  left: 40%;
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
export const FoydaliSaytlar = styled.div`
  width: 100%;
  /* height: 60vh; */
  display: flex;
  justify-content: space-around;

  flex-direction: column;
  align-items: center;
  background-color: white;
`;
export const FoydaliSaytlarCard = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden; /* Prevents image from overflowing */
  margin-bottom: 5%;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const FoydaliSaytTitle = styled.h1`
  display: flex;
  margin-top: 50px;
`;

export const FoydaliSaytlarCardimg = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 12px;
  transition: transform 0.3s ease;
  object-fit: cover; /* Ensures the image covers the container without distortion */

  ${FoydaliSaytlarCard}:hover & {
    transform: scale(1.2); /* Image scaling on card hover */
  }
`;

export const FoydaliSaytlarCardTitle = styled.a`
  text-decoration: none;
  color: black;
  margin-bottom: 5%;
  font-size: 24px;

  &:hover {
    color: #007bff; /* Hover rangini sozlang */
  }
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;
