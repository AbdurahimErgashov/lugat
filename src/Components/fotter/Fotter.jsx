import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  @media (max-width: 1280px) {
    padding: 10px 0;
  }
`;

// const FooterSection = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   /* padding: 20px; */
  
// `;

const FooterColumn = styled.div`
  display: flex;
  margin: 0 20px;
  flex-wrap: wrap;
  width: 70%;
  /* text-align: left; */
  /* flex-direction: ${({ icons }) => (icons ? 'row' : '')}; */
  justify-content: ${({ icons }) => (icons ? 'space-between' : ' ')};
  h3 {
    color: #fff;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul li {
    margin-bottom: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 10px;
    }
  }

  ul li a {
   color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 1280px) {
    margin: 0 5px;
  }
`;



const Links = styled.a``;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  /* flex-direction: column; */
  padding: 5px 0;
  svg {
    color: #fff;
    font-size: 19px;
    border-radius: 50%;
    margin-right: 10px;
    padding: 8px;
    background-color: #007bff;
  }
  div{
    margin-top: 2%;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
           <FooterColumn icons={true}>
          <ul>
            <li><Links href="/">Bosh Sahifa</Links></li>
            <li><Links href="/team">Ilmiy Jamoa</Links></li>
            <li><Links href="/publications">Nashirlar</Links></li>
            <li><Links href="/statistics">Statistik Tahlil</Links></li>
            <li><Links href="/dictionaries">Lugat</Links></li>
            <li><Links href="/contact">Bog'lanish</Links></li>
          </ul>
        </FooterColumn>
        <FooterColumn icons={true}>
          <ContactItem icon=' '>
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <div>(+00) 1234 5678</div>
          </ContactItem>
          <ContactItem icon=' '>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <div>info@email.com</div>
          </ContactItem>
          <ContactItem icon=' '>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            <div>203 Fake St. Mountain View, San Francisco, California, USA</div>
          </ContactItem>
        </FooterColumn>
   
     
    </FooterContainer>
  );
};

export default Footer;
