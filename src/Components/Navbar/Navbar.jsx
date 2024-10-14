import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavLinks,
  Logo,
  Title,
  StyledLink,
  LogoContainer,
  Dropdown,
  DropdownContent,
  DropdownLink,
  BurgerIcon,
  BurgerIcon1,
  MobileMenu,
} from "./styled";
import Logos from "../../assets/img/gerb-flag.619c9b3.png";

const Navbar = () => {
  const [isLoyihaDropdownOpen, setLoyihaDropdownOpen] = useState(false);
  const [isTilshunoslikDropdownOpen, setTilshunoslikDropdownOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoyihaClick = () => {
    setLoyihaDropdownOpen(!isLoyihaDropdownOpen);
    setTilshunoslikDropdownOpen(false);
  };

  const handleTilshunoslikClick = () => {
    setTilshunoslikDropdownOpen(!isTilshunoslikDropdownOpen);
    setLoyihaDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setLoyihaDropdownOpen(false);
    setTilshunoslikDropdownOpen(false);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeModal = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <LogoContainer onClick={handleReload}>
        <Logo src={Logos} alt="Logo" />
        <Title isScrolled={isScrolled}>O'ZBEK TILI DEALEKTAL KORPUSI</Title>
      </LogoContainer>
      <BurgerIcon isScrolled={isScrolled} onClick={toggleMobileMenu}>☰ </BurgerIcon>
      <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
      <BurgerIcon1 onClick={closeModal}>×</BurgerIcon1>
        <div className="div">
        <StyledLink href="/" isScrolled={isScrolled}>
          Bosh sahifa
        </StyledLink>
        <Dropdown>
          <StyledLink href="#" onClick={handleLoyihaClick} isScrolled={isScrolled}>
            Loyiha haqida
          </StyledLink>
          <DropdownContent isOpen={isLoyihaDropdownOpen} isScrolled={isScrolled}>
            <DropdownLink href="/team" onClick={closeDropdowns} isScrolled={isScrolled}>
              Ilmiy jamoa
            </DropdownLink>
            <DropdownLink href="/publications" onClick={closeDropdowns} isScrolled={isScrolled}>
              Nashirlar
            </DropdownLink>
          </DropdownContent>
        </Dropdown>
        <StyledLink href="/statistics" onClick={closeDropdowns} isScrolled={isScrolled}>
          Statistik tahlil
        </StyledLink>
        <StyledLink href="/dictionaries" isScrolled={isScrolled}>
          Lug'at
        </StyledLink>
        <StyledLink href="/news" isScrolled={isScrolled}>
          Yangiliklar
        </StyledLink>
        <StyledLink href="/contact" isScrolled={isScrolled}>
          Bog'lanish
        </StyledLink>
        </div>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
