// src/pages/News.js
import React from 'react';
import { PageContainer, NewsCard, NewsGrid, CardContent, CardImage, CardMeta, CardTitle } from './styled';
import useFetch from '../../hooks/useFetch'; 
function News() {
  const { data: newsData ,loading, error } = useFetch('/news/'); 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <PageContainer>
      <h1 className='heading'>News</h1>
      <NewsGrid>
        {newsData.map((news) => (
          <NewsCard key={news.id}>
            <CardImage style={{ backgroundImage: `url(${news.image})` }} />
            <CardContent>
              <CardTitle>{news.title}</CardTitle>
              <CardMeta>{news.description}</CardMeta>
                 {/* <CardMeta>     
                <MetaItem>
                  <span role="img" aria-label="calendar">📅</span> {news.date}
                </MetaItem>
                <MetaItem>
                  <span role="img" aria-label="user">👤</span> {news.author}
                </MetaItem>
                <MetaItem>
                  <span role="img" aria-label="comments">💬</span> {news.comments}
                </MetaItem>
                <MetaItem>
                  <span role="img" aria-label="views">👁️</span> {news.views}
                </MetaItem>
              </CardMeta> */}
            </CardContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </PageContainer>
  );
}

export default News;

