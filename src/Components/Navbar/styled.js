import styled,{keyframes, css} from 'styled-components';

const slideDown = keyframes`
  from {
    transform: translateY(-400%);
  }
  to {
    transform: translateY(0);
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0 25px;
  height: 90px;
  background-color: ${({ isScrolled }) => (isScrolled ? 'white' : 'transparent')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0%;
  z-index: 99;
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      animation: ${slideDown} .8s forwards;
    `}
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 15px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  font-weight: 700;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  font-size: 1.2rem;
  margin-left: ${({left})=> (left? 0 : 20)}px;
  position: relative;
  margin-right: ${({right})=> (right? 25 : 0)}px ;
  border-radius: 12px;
  padding: 15px;
  &:hover {
    background-color: rgba(0,0,0,0.3);
  }
`;

export const Dropdown = styled.div`
  position: relative;

`;

export const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  
  top: 100%;
  left: 0;
  color: black ;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 4px;
  overflow: hidden;
`;

export const DropdownLink = styled(StyledLink)`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0;
  white-space: nowrap;
  color: black;
  &:hover {
    background-color: #f8f9fa;
  }
`;
