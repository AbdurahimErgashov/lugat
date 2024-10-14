import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0 25px;
  height: 90px;
  background-color: ${({ isScrolled }) => (isScrolled ? 'white' : 'transparent')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99;
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 15px;
  @media (max-width: 1280px) {
    height: 35px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  font-weight: 700;
  @media (max-width: 1280px) {
    font-size: 1.1rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  @media (max-width: 1000px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0px;
    right: 0;
    height: 100vh;
    align-items: center;
    background-color: white;
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    .div{
      width: 100%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  font-size: 1.2rem;
  margin-left: 20px;
  padding: 15px;
  &:hover {
    background-color: rgba(0,0,0,0.3);
  }
  @media (max-width: 1280px){
    font-size: 1rem;
  }
  @media (max-width: 1000px){
    color: black;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  
`;

export const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownLink = styled(StyledLink)`
  display: block;
  padding: 10px 20px;
  color: black;
`;

export const BurgerIcon = styled.div`
  font-size: 2rem;
  color: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  cursor: pointer;
  display: none;

  @media (max-width: 1000px) {
    display: block;
    margin-right: 15%;
    /* color: black; */
  }
`;
export const BurgerIcon1 = styled.div`
  font-size: 2rem;
  color: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  cursor: pointer;
  display: none;

  @media (max-width: 1000px) {
    display: block;
    right: 5%;
    position: absolute;
    color: black;
  }
`;
