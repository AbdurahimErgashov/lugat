import styled from "styled-components";

// Container for the entire page
export const PublicationsContainer = styled.div`
  padding: 40px;
  background-color: transparent;
  min-height: 100vh;
`;

// Title for the Publications section
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #fff;
  text-align: center;
`;

// List of publications
export const PublicationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 100%;
`;

// Individual publication item
export const PublicationItem = styled.li`
  background: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Index number for each publication
export const Index = styled.span`
  font-weight: bold;
  margin-right: 10px;
  font-size: 18px;
  color: #3498db;
  margin-bottom: 10px;
  align-self: flex-start;
`;

// Details container for the publication
export const Details = styled.div`
  flex-grow: 1;
`;

// Author's name styled as a heading
export const Author = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  color: #2c3e50;
`;

// Publication text
export const Text = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 0;
`;