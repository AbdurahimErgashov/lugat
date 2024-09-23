import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 95%;
  height: 600px; /* Chart bo'yi oshirildi */
  margin: 40px auto;
  /* padding: 30px; */
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%); /* Yorqin va yumshoq fon */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Kattaroq soya */
  border-radius: 20px;
  margin-top: 6%;
`;

export const LoadingMessage = styled.p`
  font-size: 22px;
  text-align: center;
  color: #444;
  font-family: 'Poppins', sans-serif;
  margin-top: 50px;
`;

export const ErrorMessage = styled.p`
  font-size: 22px;
  text-align: center;
  color: #ff4d4d;
  font-family: 'Poppins', sans-serif;
  margin-top: 50px;
`;
