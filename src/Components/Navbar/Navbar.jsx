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
} from "./styled";
import Logos from "../../assets/img/gerb-flag.619c9b3.png";

const Navbar = () => {
  const [isLoyihaDropdownOpen, setLoyihaDropdownOpen] = useState(false);
  const [isTilshunoslikDropdownOpen, setTilshunoslikDropdownOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <NavbarContainer isScrolled={isScrolled}>
      <LogoContainer onClick={handleReload}>
        <Logo src={Logos} alt="Logo" />
        <Title isScrolled={isScrolled}>O'ZBEK TILI DEALEKTAL KORPUSI</Title>
      </LogoContainer>
      <NavLinks>
        <StyledLink href="/" isScrolled={isScrolled}>
          Bosh sahifa
        </StyledLink>
        <Dropdown>
          <StyledLink
            href="#"
            onClick={handleLoyihaClick}
            isScrolled={isScrolled}
           
          >
            Loyiha haqida
          </StyledLink>
          <DropdownContent
            isOpen={isLoyihaDropdownOpen}
            isScrolled={isScrolled}
          >
            <DropdownLink
              href="/team"
              onClick={closeDropdowns}
              isScrolled={isScrolled}
              left =' '
            >
              Ilmiy jamoa
            </DropdownLink>
            <DropdownLink
              href="/publications"
              onClick={closeDropdowns}
              isScrolled={isScrolled}
              left=' '
            >
              Nashirlar
            </DropdownLink>
          </DropdownContent>
        </Dropdown>
        <StyledLink
              href="/statistics"
              onClick={closeDropdowns}
              isScrolled={isScrolled}
            >
              Statistik tahlil
            </StyledLink>
        <StyledLink href="/dictionaries" isScrolled={isScrolled}>
          Lug'at
        </StyledLink>
        <StyledLink href="/news" isScrolled={isScrolled}>
          Yangiliklar
        </StyledLink>
        <StyledLink right=' ' href="/contact" isScrolled={isScrolled}>
          Bog'lanish
        </StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
