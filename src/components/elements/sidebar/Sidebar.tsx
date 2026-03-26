import React from 'react';
import {
  SidebarContainer,
  SidebarItem,
  SidebarTitle,
} from './Sidebar.styles';
import {
  NavbarSectionIcon,
  HeroSectionIcon,
  FeaturesSectionIcon,
  CTASectionIcon,
  FooterSectionIcon,
} from '../icons/Icons';
import { useBuilder } from '../../../contexts/BuilderContext';

const Sidebar: React.FC = () => {
  const { activeComponent, setActiveComponent } = useBuilder();
  const sections = [
    { name: 'Navbar', icon: <NavbarSectionIcon /> },
    { name: 'Hero', icon: <HeroSectionIcon /> },
    { name: 'Features', icon: <FeaturesSectionIcon /> },
    { name: 'CTA', icon: <CTASectionIcon /> },
    { name: 'Footer', icon: <FooterSectionIcon /> },
  ];

  return (
    <SidebarContainer>
      <SidebarTitle>Components</SidebarTitle>
      {sections.map((section) => (
        <SidebarItem
          key={section.name}
          isActive={activeComponent === section.name}
          onClick={() => setActiveComponent(section.name)}
        >
          {section.icon}
          {section.name}
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
