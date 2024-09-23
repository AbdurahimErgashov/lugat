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
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* padding: 20px; */
  
`;

const FooterColumn = styled.div`
  display: flex;
  margin: 0 20px;
  flex-wrap: wrap;
  width: ${({ icons }) => (icons ? '70%' : '400px')};
  text-align: left;
  flex-direction: ${({ icons }) => (icons ? 'row' : 'column')};
  justify-content: ${({ icons }) => (icons ? 'space-between' : ' ')};
  h3 {
    color: #fff;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
    color: #bbb;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  ul li a {
    color: #bbb;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }

  input {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px 0 0 5px;
    margin-right: -5px;
  }

  button {
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;



const Links = styled.a``;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
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
      <FooterSection>
        <FooterColumn>
          <h3>About</h3>
          <ul>
            <li><Links href="#">Our Story</Links></li>
            <li><Links href="#">Awards</Links></li>
            <li><Links href="#">Our Team</Links></li>
            <li><Links href="#">Career</Links></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Company</h3>
          <ul>
            <li><Links href="#">Our Services</Links></li>
            <li><Links href="#">Clients</Links></li>
            <li><Links href="#">Contact</Links></li>
            <li><Links href="#">Press</Links></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Resources</h3>
          <ul>
            <li><Links href="#">Blog</Links></li>
            <li><Links href="#">Newsletter</Links></li>
            <li><Links href="#">Privacy Policy</Links></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Subscribe</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="email" placeholder="Enter email address" />
            <button>Subscribe</button>
          </div>
        </FooterColumn>
      </FooterSection>
     
    </FooterContainer>
  );
};

export default Footer;
