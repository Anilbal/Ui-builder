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
  const { activeComponent, setActiveComponent, navbarData } = useBuilder();
  const isActive = activeComponent === 'Navbar';

  return (
    <NavbarWrapper 
      isActive={isActive} 
      onClick={(e) => {
        e.stopPropagation();
        setActiveComponent('Navbar');
      }}
    >
      <Brand>{navbarData.brand}</Brand>
      <NavLinks>
        {navbarData.links.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </NavLinks>
      <ActionButton>{navbarData.ctaText}</ActionButton>
    </NavbarWrapper>
  );
};

export default NavbarSection;
