import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartContainer, LoadingMessage, ErrorMessage } from './styled';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatisticsPage = () => {
  const { data: provensiyaData, loading: provensiyaLoading, error: provensiyaError } = useFetch('/provensiya/');
  const { data: dictionaryData, loading: dictionaryLoading, error: dictionaryError } = useFetch('/dictionary/');
  
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (provensiyaData && dictionaryData) {
      const countryCounts = {};
      
      // Provinsiyalar bo'yicha so'zlar sonini hisoblash
      dictionaryData.forEach((item) => {
        if (!countryCounts[item.provensiya.provensiya]) {
          countryCounts[item.provensiya.provensiya] = 0;
        }
        countryCounts[item.provensiya.provensiya] += 1;
      });

      // Labels va Dataset yaratish
      const labels = Object.keys(countryCounts);
      const datasets = [{
        label: 'So\'zlar soni',
        data: Object.values(countryCounts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ], // Har bir stolb uchun gradientli ranglar
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
        hoverBorderWidth: 3,
      }];

      setChartData({
        labels,
        datasets,
      });
    }
  }, [provensiyaData, dictionaryData]);

  if (provensiyaLoading || dictionaryLoading) {
    return <LoadingMessage>Yuklanmoqda...</LoadingMessage>;
  }

  if (provensiyaError || dictionaryError) {
    return <ErrorMessage>Xatolik: {provensiyaError || dictionaryError}</ErrorMessage>;
  }

  return (
    <ChartContainer>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 2000, // Animatsiya vaqtini uzaytirish
            easing: 'easeOutBounce', // "Bouncing" effekti
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 18,
                  family: "'Poppins', sans-serif",
                  weight: 'bold', // Bold qilingan legend matnlari
                },
                color: '#444',
                padding: 20, // Legend orasidagi masofa
              },
            },
            title: {
              display: true,
              text: 'Davlatlar bo\'yicha so\'zlar soni statistikasi',
              font: {
                size: 26,
                family: "'Poppins', sans-serif",
                weight: 'bold',
              },
              color: '#222',
              padding: {
                top: 10,
                bottom: 30,
              },
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltiplarga qora fon
              titleFont: {
                size: 16,
                family: "'Poppins', sans-serif",
              },
              bodyFont: {
                size: 14,
                family: "'Poppins', sans-serif",
              },
              footerFont: {
                size: 12,
                family: "'Poppins', sans-serif",
              },
              padding: 10,
              cornerRadius: 8,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              title: {
                display: true,
                text: 'Davlatlar',
                font: {
                  size: 20,
                  family: "'Poppins', sans-serif",
                },
                color: '#333',
              },
              ticks: {
                font: {
                  size: 16,
                  family: "'Poppins', sans-serif",
                },
                color: '#555',
              },
            },
            y: {
              grid: {
                color: 'rgba(200, 200, 200, 0.3)',
                borderDash: [8, 4],
              },
              title: {
                display: true,
                text: 'So\'zlar soni',
                font: {
                  size: 20,
                  family: "'Poppins', sans-serif",
                },
                color: '#333',
              },
              ticks: {
                beginAtZero: true,
                font: {
                  size: 16,
                  family: "'Poppins', sans-serif",
                },
                color: '#555',
              },
            },
          },
        }}
      />
    </ChartContainer>
  );
};

export default StatisticsPage;
