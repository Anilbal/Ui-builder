import React from 'react';
import {
  NavbarWrapper,
  Brand,
  NavLinks,
  NavLink,
  ActionButton,
} from './NavbarSection.styles';
import { useBuilder } from '../../../contexts/BuilderContext';

const NavbarSection: React.FC = () => {
  const { activeComponent } = useBuilder();
  const isActive = activeComponent === 'Navbar';

  return (
    <NavbarWrapper isActive={isActive}>
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
