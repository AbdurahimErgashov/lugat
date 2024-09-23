import styled from "styled-components";

// Container for the entire Contact section
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  margin-top: 5%;
  background-color: #f8f9fa;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Map section styling
export const MapSection = styled.div`
  flex: 1;
  position: relative;
  max-width: 50%;
  .filterMap {
    filter: brightness(0.7);
  }
  @media (max-width: 768px) {
    max-width: 100%;
    height: 300px;
  }
`;

// Phone number overlay styling
export const PhoneNumberOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "\\260E"; /* Telephone icon */
    margin-right: 10px;
  }
`;

// Contact Form section styling
export const FormSection = styled.div`
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Contact form wrapper
export const FormWrapper = styled.div`
  width: 80%;
  max-width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`;

// Form title styling
export const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// Input styling with placeholder transition
export const Input = styled.input`
  width: 100%;
  padding-top: 1.4rem;
  margin-bottom: 1.5rem;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  position: relative;
  transition: all 0.2s ease;

  &:focus {
    border-bottom: 2px solid black;
  }
`;

// Textarea styling with placeholder transition
export const Textarea = styled.textarea`
  width: 90%;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

// Button styling
export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #3f5efb, #fc466b);
  }
`;

// Contact details section styling
export const ContactDetails = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem;
  color: #555;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
