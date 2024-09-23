import React from 'react';
import { PublicationsContainer, Title, PublicationList, PublicationItem, Index, Details, Author, Text } from './styled';
import useFetch from '../../hooks/useFetch';

function Publications() {
  const { data, loading, error } = useFetch('/scientists');

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <PublicationsContainer>
      <Title>Nashrlar</Title>
      <PublicationList>
        {data && data.map((publication, index) => (
          <PublicationItem key={index}>
            <Index>{index + 1}</Index>
            <Details>
              <Author>{publication.fullname}</Author>
              <Text>{publication.description}</Text>
            </Details>
          </PublicationItem>
        ))}
      </PublicationList>
    </PublicationsContainer>
  );
}

export default Publications;
