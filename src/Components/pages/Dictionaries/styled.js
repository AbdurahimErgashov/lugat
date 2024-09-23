import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ darkMode }) => darkMode ? '#2c2c2c' : '#ffffff'};
  padding: 40px;
  border-radius: 10px;
  max-width: 88%;
  margin: 5% auto;
  font-family: 'Arial', sans-serif;
  overflow-y: hidden;
  color: ${({ darkMode }) => darkMode ? '#f1f1f1' : '#333'};
  position: relative;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 40px;
  color: inherit;
  letter-spacing: 10px;
  font-family: var(--fontFaHello);
`;
export const DictonaryContainer = styled.h1`
  width: 100%;
  height: 100vh;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ darkMode }) => darkMode ? '#a445ed' : '#a445ed'};
`;

export const Input = styled.input`
  padding: 15px;
  width: 100%;
  border: none;
  font-size: 20px;
  outline: none;
  background-color: ${({ darkMode }) => darkMode ? '#444' : '#fff'};
  color: ${({ darkMode }) => darkMode ? '#fff' : '#333'};

  &::placeholder {
    color: ${({ darkMode }) => darkMode ? '#a445ed' : '#a445ed'};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ darkMode }) => darkMode ? '#fff' : '#a445ed'};

  &:hover {
    color: ${({ darkMode }) => darkMode ? '#bb86fc' : '#4B0082'};
  }
`;

export const AudioButton = styled.button`
  margin-top: 20px;
  padding: 15px;
  background-color: ${({ darkMode }) => darkMode ? '#a445ed' : '#a445ed'};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ darkMode }) => darkMode ? '#bb86fc' : '#7e3ea6'};
  }
`;

export const Result = styled.div`
  margin-top: 30px;
  padding: 0;
  height: ${props => (props.isVisible ? '60vh' : '0')};
  max-height: ${props => (props.isVisible ? '60vh' : '0')}; /* max-height ni kerakli qiymatga o'zgartiring */

  border-radius: 10px;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(-20px)')};
  transition: all 0.3s ease-in-out;
  overflow: auto;
  scrollbar-color: transparent transparent;
  position: relative;
  h2 {
    font-size: 34px;
    color: inherit;
  }

  p {
    margin-top: 25px;
    font-size: 19px;
    color: inherit;
  }
  div{
    border-color: ${({ darkMode }) => darkMode ? '#fff' : '#000'}  !important;
  }

`;

export const ThemeToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: inherit;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: ${({ darkMode }) => darkMode ? '#bb86fc' : '#a445ed'};
  }
`;
export const SentenceContainer = styled.div`
  background-color: ${({ darkMode }) => darkMode ? '#3c3c3c' : '#f3f4f6'};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow-y: auto;
`;

export const SentenceItem = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  color: ${({ darkMode }) => darkMode ? '#f1f1f1' : '#333'};
  cursor: pointer;

  &:hover {
    color: ${({ darkMode }) => darkMode ? '#bb86fc' : '#4B0082'};
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ darkMode }) => darkMode ? '#444' : '#fff'};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  width: 300px;
  text-align: center;
  
  p {
    margin: 0;
    font-size: 18px;
    color: ${({ darkMode }) => darkMode ? '#f1f1f1' : '#333'};
  }
`;
export const HighlightedWord = styled.span`
  color: blue;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
export const SelectContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  label {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
    margin-right: 10px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid ${({ darkMode }) => (darkMode ? '#333333' : '#cccccc')};
  background-color: ${({ darkMode }) => (darkMode ? '#444444' : '#ffffff')};
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
  font-size: 1rem;
  outline: none;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')} 50%),
    linear-gradient(135deg, ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')} 50%, transparent 50%);
  background-position: calc(100% - 10px) calc(1em + 5px), calc(100% - 5px) calc(1em + 5px);
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  cursor: pointer;

  &:focus {
    border-color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#007bff')};
  }

  option {
    background-color: ${({ darkMode }) => (darkMode ? '#444444' : '#ffffff')};
    color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
  }
`;