import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(`So'rov boshlanmoqda: ${process.env.REACT_APP_API_BASE_URL}${endpoint}`);
      try {
        const url = `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;
        const response = await fetch(url);
        // console.log(`Javob olindi:`, response);

        if (!response.ok) {
          throw new Error('Ma\'lumotlarni yuklashda xatolik yuz berdi');
        }

        const result = await response.json();
        // console.log('JSON formatiga o‘girildi:', result);
        setData(result);
      } catch (error) { 
        // console.error('Xatolik yuz berdi:', error.message);
        setError(error.message);
      } finally {
        // console.log('Yuklash jarayoni yakunlandi');
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
