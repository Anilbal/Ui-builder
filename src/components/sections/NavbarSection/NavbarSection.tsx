import React from 'react';
import {
  NavbarWrapper,
  Brand,
  NavLinks,
  NavLink,
  ActionButton,
} from './NavbarSection.styles';

const NavbarSection: React.FC = () => {
  return (
    <NavbarWrapper>
      <Brand>Brand</Brand>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavLinks>
      <ActionButton>Get Started</ActionButton>
    </NavbarWrapper>
  );
};

export default NavbarSection;
