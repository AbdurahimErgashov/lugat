import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  margin-top: 5%;
  min-height: 100vh;
  .heading{
    color: white;
    text-align: center;
    font-size: 40px;
  }
`;

export const NewsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NewsCard = styled.div`
  position: relative;
  background-color: #000;
  border-radius: 10px;
  margin-left: 25px;
  margin-top: 15px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 400px;
  height: 400px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

export const CardImage = styled.div`
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
  color: #fff;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-top: 10px;
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  margin-right: 15px;
  
  svg {
    margin-right: 5px;
  }
`;