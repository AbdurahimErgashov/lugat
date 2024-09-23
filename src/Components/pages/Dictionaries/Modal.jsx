import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Modal = ({ isVisible, onClose, position, content }) => {
  const modalRef = useRef();

  useEffect(() => {
    // Function to handle clicks outside the modal
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal when clicked outside
      }
    };

    // Function to handle scroll event and close modal
    const handleScroll = () => {
      onClose(); // Close the modal when the page is scrolled
    };

    // Add event listeners for clicks outside the modal and scroll events
    if (isVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    }

    // Clean up event listeners when the modal closes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const modalPositionStyles = {
    top: `${position.top - 155}px`,
    left: `${position.left + 0}px`,
  };

  return (
    <Overlay  ref={modalRef} style={modalPositionStyles}>
      <Triangle />
      <Content>
        <CloseButton onClick={onClose}>×</CloseButton>
        <p className="p1">{content.soz_ildizi?.toUpperCase() || "No Word"}</p>
        <p className="p2">
          {content.soz_turkumi + "  + " + (content["qo'shimcha"] || "") || "No Lemma"}
        </p>
      </Content>
    </Overlay>
  );
};

// Styled-components for modal
const Overlay = styled.div`
  position: absolute;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Content = styled.div`
  background: linear-gradient(135deg, #007acc, #00d4ff);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 300px;
  text-align: center;
  color: white;
  font-family: "Arial", sans-serif;
`;

const Triangle = styled.div`
  position: absolute;
  top: 60px;
  left: -20px;
  transform: rotate(-90deg);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #007acc;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #00bfff;
  }
`;

export default Modal;
