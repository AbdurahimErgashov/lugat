import React, { useState, useEffect } from "react";
import {
  ContactContainer,
  MapSection,
  PhoneNumberOverlay,
  FormSection,
  FormWrapper,
  FormTitle,
  Input,
  Textarea,
  Button,
  ContactDetails,
} from "./styled";
import useFetch from "../../hooks/useFetch";

function Contact() {
  const { data, loading, error } = useFetch("/contacts");

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error loading data...</p>;

  // If the data is an array, get the first item
  const contact = data && data.length ? data[0] : null;

  if (!contact) {
    return <p>No contact data available</p>;
  }

  return (
    <ContactContainer>
      <MapSection>
        <iframe
          className="filterMap"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${contact.latitude},${contact.longitude}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <PhoneNumberOverlay>{contact.phone}</PhoneNumberOverlay>
      </MapSection>
      <FormSection>
        <FormWrapper>
          <FormTitle>Contact Us</FormTitle>
          <Input type="text" placeholder="Name..." />
          <Input type="email" placeholder="Email address..." />
          <Input type="text" placeholder="Phone Number..." />
          <Textarea rows="3" placeholder="Questions/Comments..." />
          <Button>Send</Button>
        </FormWrapper>
        <ContactDetails>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href={contact.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </p>
          <p>
            <a href={contact.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
        </ContactDetails>
      </FormSection>
    </ContactContainer>
  );
}

export default Contact;
